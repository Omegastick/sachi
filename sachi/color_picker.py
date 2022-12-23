from typing import Set

import pynecone as pc


class ColorPicker(pc.Component):
    library = "react-colorful"
    tag = "HexColorPicker"
    color: pc.Var[str]

    @classmethod
    def get_controlled_triggers(cls) -> Set[str]:
        return {"on_change"}


color_picker = ColorPicker.create
