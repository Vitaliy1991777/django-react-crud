
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserProfileViewSet, TaskViewSet

# Роутер для автоматической генерации маршрутов
router = DefaultRouter()
router.register(r'userprofiles', UserProfileViewSet, basename='userprofile')
router.register(r'tasks', TaskViewSet, basename='task')

urlpatterns = [
    path('', include(router.urls)),  # Подключение маршрутов роутера
]
