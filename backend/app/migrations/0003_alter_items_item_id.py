# Generated by Django 3.2.9 on 2021-11-05 13:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_auto_20211105_0943'),
    ]

    operations = [
        migrations.AlterField(
            model_name='items',
            name='item_id',
            field=models.IntegerField(default=9),
        ),
    ]
