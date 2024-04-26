# Generated by Django 5.0.3 on 2024-04-01 20:27

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("newsletter", "0002_remove_subscribers_name"),
    ]

    operations = [
        migrations.AddField(
            model_name="subscribers",
            name="verified_token",
            field=models.UUIDField(default=uuid.uuid4, editable=False),
        ),
    ]
