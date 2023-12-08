from django.db import models


class Student(models.Model):
    #id=models.ForeignKey()
    username = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=50)
 


def __str__(self):
    return f'Student:{self.username} {self.email}'
