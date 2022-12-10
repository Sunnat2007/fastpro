# Generated by Django 4.1.3 on 2022-11-04 10:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Html',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField(max_length=200, verbose_name='Slug')),
            ],
            options={
                'verbose_name': 'Html',
                'verbose_name_plural': 'Htmllar',
            },
        ),
        migrations.CreateModel(
            name='Dars',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nechanchi_dars', models.CharField(max_length=30, verbose_name='Nechanchi dars')),
                ('kalit', models.CharField(max_length=4, verbose_name='Inglizcha matni')),
                ('video', models.FileField(upload_to='videos/', verbose_name='video')),
                ('slug', models.SlugField(max_length=30, verbose_name='Slug')),
                ('dars', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='edu.html')),
            ],
            options={
                'verbose_name': 'Dars',
                'verbose_name_plural': 'Darslar',
            },
        ),
    ]
