import re
from django.shortcuts import render
from django.template import context
from django.views.generic import ListView,TemplateView
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Director, Favorito, Pelicula, Usuario
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from django.contrib.auth.models import User

from rest_framework.generics import (
    ListAPIView, CreateAPIView,
    RetrieveAPIView, DestroyAPIView,
    UpdateAPIView, RetrieveUpdateAPIView,
)

from .serializers import (
    FavoritosResponse, FavoritosResponse2, MyTokenObtainPairSerializer, DirectorResponse, PeliculaPagination, PeliculaRequest, RegisterSerializer, UsuarioResponse, PeliculaResponse, PeliculaDirectoresResponse
)

# Retrieves
class Peliculas(ListAPIView):
    serializer_class = PeliculaDirectoresResponse
    def get_queryset(self):
        return Pelicula.objects.all()

class Usuarios(ListAPIView):
    serializer_class = PeliculaResponse
    def get_queryset(self):
        return Pelicula.objects.all()

class Directores(ListAPIView):
    serializer_class = PeliculaResponse
    def get_queryset(self):
        return Pelicula.objects.all()

class Favoritos(ListAPIView):
    serializer_class = FavoritosResponse    
    permission_classes = (IsAuthenticated,)
    def get_queryset(self):
        return Favorito.objects.all()

class PeliculaSearchByName(ListAPIView):
    serializer_class = PeliculaDirectoresResponse
    def get_queryset(self):
        kword = self.kwargs['kword']
        return Pelicula.objects.filter(nombre__icontains = kword)

class FavoritosSearchByUser(ListAPIView):
    serializer_class = FavoritosResponse
    permission_classes = (IsAuthenticated,)
    def get_queryset(self):
        kword = self.kwargs['id']
        favs = Favorito.objects.filter(user=kword)
        pelicula = Pelicula.objects.filter(id=1)
        data = {
            'pelicula': pelicula
        }
        return favs

class PeliculasPaginacion(ListAPIView):
    serializer_class = PeliculaResponse
    pagination_class = PeliculaPagination
    def get_queryset(self):
        return Pelicula.objects.all()

# Pelicula CRUD
class PeliculaCreateView(CreateAPIView):
    serializer_class = PeliculaRequest

class PeliculaDetailView(RetrieveAPIView):
    serializer_class = PeliculaResponse
    queryset = Pelicula.objects.all()

class PeliculaDeleteView(DestroyAPIView):
    serializer_class = PeliculaResponse
    queryset = Pelicula.objects.all()

class PeliculaUpdateView(UpdateAPIView):
    serializer_class = PeliculaResponse
    queryset = Pelicula.objects.all()

class PeliculaRetrieveUpdateView(RetrieveUpdateAPIView):
    serializer_class = PeliculaResponse
    queryset = Pelicula.objects.all()


# Pelicula CRUD
class PeliculaCreate(CreateAPIView):
    serializer_class = PeliculaResponse

class PeliculaShow(RetrieveAPIView):
    serializer_class = PeliculaDirectoresResponse
    queryset = Pelicula.objects.all()

class PeliculaDelete(DestroyAPIView):
    serializer_class = PeliculaResponse
    queryset = Pelicula.objects.all()

class PeliculaUpdate(UpdateAPIView):
    serializer_class = PeliculaResponse
    queryset = Pelicula.objects.all()

class PeliculaRetrieveUpdate(RetrieveUpdateAPIView):
    serializer_class = PeliculaResponse
    queryset = Pelicula.objects.all()

# Director CRUD
class DirectorCreate(CreateAPIView):
    serializer_class = DirectorResponse

class DirectorShow(RetrieveAPIView):
    serializer_class = DirectorResponse
    queryset = Director.objects.all()

class DirectorDelete(DestroyAPIView):
    serializer_class = DirectorResponse
    queryset = Director.objects.all()

class DirectorUpdate(UpdateAPIView):
    serializer_class = DirectorResponse
    queryset = Director.objects.all()

class DirectorRetrieveUpdate(RetrieveUpdateAPIView):
    serializer_class = DirectorResponse
    queryset = Director.objects.all()
    
# Usuario CRUD
class DirectorCreate(CreateAPIView):
    serializer_class = UsuarioResponse

class DirectorShow(RetrieveAPIView):
    serializer_class = UsuarioResponse
    queryset = Usuario.objects.all()

class DirectorDelete(DestroyAPIView):
    serializer_class = UsuarioResponse
    queryset = Usuario.objects.all()

class DirectorUpdate(UpdateAPIView):
    serializer_class = UsuarioResponse
    queryset = Usuario.objects.all()

class DirectorRetrieveUpdate(RetrieveUpdateAPIView):
    serializer_class = UsuarioResponse
    queryset = Usuario.objects.all()

class MyObtainTokenPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer