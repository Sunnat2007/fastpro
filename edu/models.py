from django.db import models
from django.utils import timezone
from django.urls import reverse

# Create your models here.

class Html(models.Model):
    # nechanchi_dars = models.CharField('Nechanchi dars' ,max_length=30)
    slug = models.SlugField('Slug' ,max_length=200)
    
    class Meta:
        verbose_name = 'Html'
        verbose_name_plural = 'Htmllar'

    def get_absolute_url(self):
        return f"/html/{self.slug}/"

    def __str__(self):
        return self.name

        

class Dars(models.Model):
    nechanchi_dars = models.CharField('Nechanchi dars' ,max_length=30)
    kalit = models.CharField('Kalit' ,max_length=4)
    slug = models.SlugField('Slug' ,max_length=30)
    video = models.FileField('video' ,upload_to='videos/')
    slug = models.SlugField('Slug' ,max_length=30)

    class Meta:
        verbose_name = 'Dars'
        verbose_name_plural = 'Darslar'

    def get_absolute_url(self):
        return f"/dars/{self.slug}"

    def __str__(self):
        return self.nechanchi_dars


