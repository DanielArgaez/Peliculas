
from unicodedata import name
from django.urls import path, re_path

from . import views
from rest_framework_simplejwt.views import TokenRefreshView

app_name = 'peliculas_app'
urlpatterns = [
    path('api/peliculas', views.Peliculas.as_view(),),
    path('api/peliculas/search/<kword>/', views.PeliculaSearchByName.as_view(),),
    path('api/pelicula/create',views.PeliculaCreate.as_view(),),
    path('api/pelicula/<pk>',views.PeliculaShow.as_view(), name = 'detalle'),
    path('api/pelicula/delete/<pk>',views.PeliculaDelete.as_view(),),
    path('api/pelicula/update/<pk>',views.PeliculaUpdate.as_view(),),
    path('api/pelicula/modificar/<pk>',views.PeliculaUpdate.as_view(),),
    path('api/favoritos/<id>',views.FavoritosSearchByUser.as_view(),),    
    path('api/login/', views.MyObtainTokenPairView.as_view(), name='token_obtain_pair'),
    path('api/login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/register/', views.RegisterView.as_view(), name='auth_register'),
]
