from django.contrib import admin

from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib import admin
from django.contrib.auth.models import User

from .models import Director, Favorito, Pelicula, Usuario

admin.site.register(Pelicula)
admin.site.register(Director)
admin.site.register(Usuario)
admin.site.register(Favorito)