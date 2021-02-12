from django.db import models
from django.db.models import JSONField


VIZUALISATIONS = (
    # add chartjs charts allowed below
    ("bar_chart", "Bar chart"),
)


class Chart(models.Model):
    name = models.CharField(
        max_length=120,
        default="Main dashboard",
        help_text="Name for the dashboard",
    )
    description = models.CharField(
        max_length=255,
        help_text="",
    )
    viz_type = models.CharField(
        max_length=20,
        choices=VIZUALISATIONS,
        default='bar_chart',
        help_text="The type of chartjs chart used",
    )
    # datasource = TODO
    params = JSONField(default=dict)
    # owners = TODO
