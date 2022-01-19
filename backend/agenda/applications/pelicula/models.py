#
from model_utils.models import TimeStampedModel
#
from django.db import models

from .managers import ReunionManager
from django.contrib.auth.models import User



"""
2.1	Nombre 
2.2	Correo
2.3	Edad
2.4	Usuario
"""
class Usuario(TimeStampedModel):
    id = models.AutoField('id',primary_key=True)
    edad = models.PositiveIntegerField('edad')    
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'
    
    def __str__(self):
        return self.nombre


    """
    1.1	Nombre.
1.2	Fecha.
1.3	Descripción.
1.4	Rango.
1.5	Director.
1.6	Autores.
1.7	Duración

    """
class Pelicula(TimeStampedModel):
    id = models.AutoField('id',primary_key=True)
    nombre = models.CharField( 'nombre', max_length=100, blank=False)
    fecha = models.DateTimeField('fecha', blank=False)
    descripcion = models.TextField('descripcion', blank=False)
    rango = models.PositiveIntegerField('rango', max_length=5)
    duracion = models.PositiveIntegerField('duracion')
    imagen = models.TextField('imagen')
    @property
    def directores(self):
        return Director.objects.filter(pelicula=self)

    class Meta:
        verbose_name = 'Pelicula'
        verbose_name_plural = 'Peliculas'
    
    def __str__(self):
        # return self.full_name
        return self.nombre + ' - ' + str(self.id)

class Director(TimeStampedModel):
    id = models.AutoField('id',primary_key=True)
    nombre = models.CharField('nombre', max_length=50, blank=False)
    pelicula = models.ForeignKey(Pelicula, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Director'
        verbose_name_plural = 'Directores'
    
    def __str__(self):
        return self.nombre

class Favorito(TimeStampedModel):
    id = models.AutoField('id',primary_key=True)
    pelicula = models.ForeignKey(Pelicula, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Favorito'
        verbose_name_plural = 'Favoritos'
    