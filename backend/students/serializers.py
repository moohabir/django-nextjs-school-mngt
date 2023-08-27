from rest_framework import serializers
from .models import Student


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('id', 'student_number', 'first_name',
                  'last_name', 'email', 'field_of_study', 'gpa')
