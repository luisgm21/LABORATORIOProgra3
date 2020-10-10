from django.db import models

# Create your models here.
class Propiedad(models.Model):
    TIPO_OPCIONES = (
        ('Casa', 'casa'),
        ('Departamento', 'departamento'),
        ('Habitacion', 'habitacion')
    )
    tipo = models.CharField(max_length = 12, choices = TIPO_OPCIONES)
    descripcion = models.CharField(max_length = 200)
    fecha_alta = models.DateField()
    metros_cubiertos = models.IntegerField()
    metros_descubiertos = models.IntegerField()
    capacidad = models.IntegerField()
    cochera = models.BooleanField()
    cap_cochera = models.IntegerField()
    cant_baños = models.IntegerField()

    class Meta:
        ordering = ('tipo',)
        
    def __str__(self):
        return '{}'.format(self.tipo)