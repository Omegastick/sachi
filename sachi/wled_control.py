#!/usr/bin/env python
import asyncio
import csv
from dataclasses import dataclass
from json import JSONDecodeError
from typing import List, Tuple

from wled import WLED, WLEDConnectionError

LED_COUNT = 64
CONFIG_FILE = "config.csv"
COLORS_FILE = "colors.csv"

CONTROLLER_IPS = ["192.168.1.169", "192.168.1.170", "192.168.1.171", "192.168.1.172"]


@dataclass
class Color:
    red: int
    green: int
    blue: int

    def to_tuple(self) -> Tuple[int, int, int]:
        return self.red, self.green, self.blue


def load_colors(colors_file: str) -> List[Color]:
    colors = []
    with open(colors_file, newline="") as csvfile:
        reader = csv.reader(csvfile, delimiter=",")
        for row in reader:
            colors.append(Color(int(row[0]), int(row[1]), int(row[2])))
    return colors


def get_ip_and_segment(led_index: int) -> Tuple[str, int]:
    segment_count = LED_COUNT // len(CONTROLLER_IPS)
    controller_index = led_index // segment_count
    ip = CONTROLLER_IPS[controller_index]
    segment = led_index % segment_count
    return ip, segment


async def set_leds(colors: List[Color], color_indices: List[int]) -> None:
    for led_index in range(0, LED_COUNT):
        color_index = color_indices[led_index]
        brightness = 0 if color_index == 0 else 255
        ip, segment = get_ip_and_segment(led_index)
        try:
            async with WLED(ip, request_timeout=0.5) as wled:
                try:
                    print(f"Seting {ip} {segment} {brightness} {colors[color_index - 1]}")
                    await wled.segment(segment, brightness=brightness, color_primary=colors[color_index - 1].to_tuple())
                except JSONDecodeError:
                    pass
        except WLEDConnectionError as e:
            print(f"Connection error: {e}")


def read_csv(file_name: str) -> List[int]:
    color_indices = []
    with open(file_name, newline="") as csvfile:
        reader = csv.reader(csvfile, delimiter=",")
        for row in reader:
            color_indices.extend([int(value) for value in row])
    return color_indices


async def main():
    colors = load_colors(COLORS_FILE)
    color_indices = read_csv(CONFIG_FILE)
    await set_leds(colors, color_indices)


if __name__ == "__main__":
    asyncio.run(main())
