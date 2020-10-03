from django.db import models

# Create your models here.

class Persona(models.Model):
    GENERO_OPCIONES = (
        ('Masculino', 'masculino'),
        ('Femenino', 'femenino'),
    )
    dni = models.CharField(max_length=8, unique = True)
    nombre_completo = models.CharField(max_length = 200)
    fecha_nacimiento = models.DateField()
    sexo = models.CharField(max_length = 1, choices = GENERO_OPCIONES)
    domicilio = models.CharField(max_length = 250)
    creado = models.DateTimeField(auto_now_add = True)
    modificado = models.DateTimeField(auto_now = True)

    class Meta:
        ordering = ('nombre_completo',)
        
    def __str__(self):
        return '{}'.format(self.nombre_completo)