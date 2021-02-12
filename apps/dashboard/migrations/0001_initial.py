# Generated by Django 3.1.6 on 2021-02-12 10:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Dashboard',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='Main dashboard', help_text='Name for the dashboard', max_length=120)),
                ('description', models.CharField(default='Main dashboard', help_text='Name for the dashboard', max_length=120)),
                ('data_up_to_dt', models.DateTimeField(blank=True, help_text='What date is the latest data.', null=True, verbose_name='Latest data date')),
                ('is_published', models.BooleanField(default=False)),
            ],
        ),
    ]
