from typing import Any, List

import pynecone as pc

from sachi.color_picker import color_picker

BOARD_SIZE = 8

from sachi.wled_control import Color, set_leds


def hex_to_rgb(hex: str) -> Color:
    return Color(
        red=int(hex[1:3], 16),
        green=int(hex[3:5], 16),
        blue=int(hex[5:7], 16),
    )


def unflatten(l: List[Any], n: int) -> List[List[Any]]:
    return [l[i : i + n] for i in range(0, len(l), n)]


def rotate_2d(l: List[List[Any]]) -> List[List[Any]]:
    return list(zip(*l[::-1]))


def flatten(l: List[List[Any]]) -> List[Any]:
    return [item for sublist in l for item in sublist]


def rotate_flattened(l: List[Any], n: int) -> List[Any]:
    return flatten(rotate_2d(unflatten(l, n)))


class State(pc.State):
    """The app state."""

    colors: List[str] = ["#333333", "#FF8811", "#1188FF", "#FFFFFF"]
    color_indices: List[int] = [0] * BOARD_SIZE * BOARD_SIZE
    new_color: str = "white"

    @pc.var
    def colors_view(self) -> List[str]:
        return self.colors[1:]

    def set_index(self, index: int, value: Any) -> None:
        new_indices = self.color_indices.copy()
        new_indices[index] = int(value)
        self.color_indices = new_indices
        print(self.color_indices)

    def add_color(self) -> None:
        self.colors += [self.new_color]

    def delete_color(self, color: str) -> None:
        self.colors = [c for c in self.colors if c != color]

    async def save_colors(self) -> None:
        print("Saving colors")
        rotated_indices = rotate_flattened(self.color_indices, BOARD_SIZE)
        await set_leds([hex_to_rgb(color) for color in self.colors[1:]], rotated_indices)

    def reset(self) -> None:
        self.color_indices = [0] * BOARD_SIZE * BOARD_SIZE


def render_color(color: str) -> pc.Component:
    return pc.hstack(
        pc.box(
            bg=color,
            width="4em",
            height="4em",
            border="0px",
            border_radius="4px",
            margin="4px",
            box_shadow="0px 0px 4px 0px rgba(0,0,0,0.75)",
        ),
        pc.button("X", on_click=lambda: State.delete_color(color), bg="red", color="white"),
    )


def index():
    return pc.center(
        pc.hstack(
            pc.vstack(
                pc.heading("Add Color"),
                pc.vstack(
                    color_picker(color=State.new_color, on_change=State.set_new_color),
                    pc.button("Add", on_click=State.add_color),
                ),
            ),
            pc.vstack(
                pc.heading("Colors"),
                pc.vstack(
                    pc.foreach(
                        State.colors_view,
                        lambda color: render_color(color),
                    )
                ),
            ),
            pc.vstack(
                pc.heading("Board Control"),
                pc.grid(
                    *[
                        pc.grid_item(
                            pc.number_input(
                                value=State.color_indices[i],
                                on_change=lambda value: State.set_index(i, value),
                                bg=State.colors[State.color_indices[i]],
                            ),
                            row_span=1,
                            col_span=1,
                            width="4em",
                        )
                        for i in range(BOARD_SIZE * BOARD_SIZE)
                    ],
                    template_columns=f"repeat({BOARD_SIZE}, 1fr)",
                    template_rows=f"repeat({BOARD_SIZE}, 1fr)",
                    gap=4,
                ),
            ),
            pc.vstack(
                pc.button("Save", on_click=State.save_colors, bg="#1188FF", font_size="3em", padding="1em"),
                pc.button("Reset", on_click=State.reset, font_size="2em", padding="1em"),
            ),
            height="100vh",
            spacing="5vw",
        )
    )


# Add state and page to the app.
app = pc.App(state=State, middleware=[pc.middleware.LoggingMiddleware()])
app.add_page(index, title="Kilter Board Control")
app.compile()
