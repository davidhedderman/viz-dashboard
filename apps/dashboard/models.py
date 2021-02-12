from django.db import models


class Dashboard(models.Model):
    name = models.CharField(
        max_length=120,
        default="Main dashboard",
        help_text="Name for the dashboard",
    )
    description = models.CharField(
        max_length=120,
        default="Main dashboard",
        help_text="Name for the dashboard",
    )
    # owners = TODO
    # charts = TODO
    data_up_to_dt = models.DateTimeField(
        null=True,
        blank=True,
        help_text="What date is the latest data.",
        verbose_name="Latest data date",
    )
    is_published = models.BooleanField(
        default=False,
        help_text="",
    )
