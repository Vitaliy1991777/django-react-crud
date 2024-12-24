# from django.shortcuts import render

# from rest_framework import viewsets
# from .models import UserProfile, Task
# from .serializers import UserProfileSerializer, TaskSerializer


# class UserProfileViewSet(viewsets.ModelViewSet):
#     """
#     ViewSet для работы с UserProfile.
#     """
#     queryset = UserProfile.objects.all()
#     serializer_class = UserProfileSerializer

# class TaskViewSet(viewsets.ModelViewSet):
#     """
#     ViewSet для работы с Task.
#     """
#     queryset = Task.objects.all()
#     serializer_class = TaskSerializer

# from rest_framework import viewsets
# from .models import UserProfile, Task
# from .serializers import UserProfileSerializer, TaskSerializer
# from rest_framework.permissions import IsAuthenticated


# class UserProfileViewSet(viewsets.ModelViewSet):
#     """
#     ViewSet для работы с UserProfile.
#     """
#     queryset = UserProfile.objects.all()
#     serializer_class = UserProfileSerializer
#     permission_classes = [IsAuthenticated]  # Требуется токен


# class TaskViewSet(viewsets.ModelViewSet):
#     """
#     ViewSet для работы с задачами (CRUD).
#     """
#     queryset = Task.objects.all()
#     serializer_class = TaskSerializer
#     permission_classes = [IsAuthenticated]  # Только для авторизованных пользователей

#     def get_queryset(self):
#         # Возвращает только задачи текущего пользователя
#         return self.queryset.filter(owner=self.request.user)

#     def perform_create(self, serializer):
#         # Автоматически устанавливает текущего пользователя как владельца задачи
#         serializer.save(owner=self.request.user)


from rest_framework import viewsets
from .models import UserProfile, Task
from .serializers import UserProfileSerializer, TaskSerializer
from rest_framework.permissions import IsAuthenticated

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]

class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Task.objects.filter(owner=self.request.user)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)