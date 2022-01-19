from email.policy import default
from django.forms import fields
from setuptools import Require
from .models import Favorito, Pelicula, Director, Usuario
from rest_framework import serializers,  pagination
from django.contrib.auth import password_validation, authenticate
from rest_framework.authtoken.models import Token
from django.core.validators import RegexValidator, FileExtensionValidator
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class PeliculaResponse(serializers.ModelSerializer):
    class Meta:
        model = Pelicula
        fields = ('__all__')

class DirectorResponse(serializers.ModelSerializer):
    class Meta:
        model = Director
        fields = (
            'nombre',
            #'pelicula'
        )

class FavoritosResponse(serializers.ModelSerializer):
    class Meta:
        model = Favorito
        fields = ('__all__')


class FavoritosResponse2(serializers.Serializer):
    pelicula = PeliculaResponse
    usuario = User

class UsuarioResponse(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ('__all__')

class PeliculaDirectoresResponse(serializers.ModelSerializer):
    directores = DirectorResponse(many=True)
    class Meta:
        model = Pelicula
        fields = (
            'id',
            'nombre',
            'fecha',
            'descripcion',
            'rango',
            'directores',
            'duracion',
            'imagen',
        )

class PeliculaPagination(pagination.PageNumberPagination):
    page_size = 2
    max_page_size = 100

class CountPeliculaSerializer(serializers.Serializer):
    persona__job = serializers.CharField()
    cantidad = serializers.IntegerField()

class PeliculaRequest(serializers.Serializer):
    pelicula = PeliculaResponse
    directores = DirectorResponse

class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )

    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'password2', 'email', 'first_name', 'last_name')
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True}
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )

        
        user.set_password(validated_data['password'])
        user.save()        
        #Save userinfo record
        #uinfo = user.get_profile()
        #uinfo.edad = validated_data["edad"]
        #uinfo.save()

        return user


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)

        # Add custom claims
        token['username'] = user.username
        return token