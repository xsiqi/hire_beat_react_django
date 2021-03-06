# Generated by Django 3.0.5 on 2020-05-20 18:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_auto_20200519_2349'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='education',
            field=models.CharField(default='Not provided', max_length=50),
        ),
        migrations.AddField(
            model_name='profile',
            name='intro_video_link',
            field=models.URLField(null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='membership',
            field=models.CharField(choices=[('Regular', 'Regular'), ('Premium', 'Premium'), ('Prestige', 'Prestige')], default='Regular', max_length=20),
        ),
        migrations.AddField(
            model_name='profile',
            name='summary',
            field=models.TextField(default='Not provided'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='location',
            field=models.CharField(default='Not provided', max_length=50),
        ),
    ]
