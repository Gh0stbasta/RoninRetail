# Generated by Django 5.1.6 on 2025-02-21 07:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Mitarbeiter',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('status', models.CharField(max_length=30)),
                ('herkunft', models.CharField(max_length=50)),
                ('kills', models.IntegerField()),
                ('ehre', models.CharField(max_length=30)),
            ],
        ),
    ]
