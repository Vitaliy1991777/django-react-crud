from rest_framework import serializers
from .models import UserProfile, Task

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['id', 'user', 'bio']  # Укажите поля, которые хотите сериализовать


class TaskSerializer(serializers.ModelSerializer):
    owner = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'owner', 'created_at']
