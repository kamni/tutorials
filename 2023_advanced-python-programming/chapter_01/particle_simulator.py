#!/usr/bin/env python3

"""
Simulates the movement of particles around a central orbit point.
"""

from dataclasses import dataclass
from typing import List


@dataclass
class Particle:
    x: float
    y: float
    angular_velocity: float


class ParticleSimulator:
    DEFAULT_TIMESTEP = 0.00001

    def __init__(self, particles: List[Particle], timestep: float = DEFAULT_TIMESTEP):
        self.particles = particles
        self.timestep = timestep

    def _calculate_number_of_intervals(self, dt_in_seconds: int) -> int:
        return int(dt_in_seconds / self.timestep)

    # TODO: let's cache this
    # Question: how does this effect memory, versus changing in place?
    def _move_particle(self, particle: Particle) -> Particle:
        norm = (particle.x ** 2 * particle.y ** 2) ** 0.5
        velocity_x = -particle.y / norm
        velocity_y = -particle.x / norm
        dx = timestep * particle.angular_velocity * velocity_x
        dy = timestep * particle.angular_velocity * velocity_y
        return Particle(
            x=particle.x + dx,
            y=particle.y + dy,
            angular_velocity=particle.angular_velocity,
        )

    def evolve(self, dt_in_seconds: int):
        num_intervals = self._calculate_number_of_intervals(dt)
        for i in range(num_intervals):
            new_particles = [
                self._move_particle(particle)
                for particle in self.particles
            ]
            self.particles = new_particles
