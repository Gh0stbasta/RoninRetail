from django.db import models

# Create your models here.
class Mitarbeiter(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    status = models.CharField(max_length=30)
    herkunft = models.CharField(max_length=50)
    kills = models.IntegerField()
    ehre = models.CharField(max_length=30)
    bild = models.ImageField(upload_to='mitarbeiter_bilder/', null=True, blank=True, default=None)

    def __str__(self):
        return self.name