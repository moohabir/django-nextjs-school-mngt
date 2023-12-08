from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('students.urls')),
    path('', include('teachers.urls')),
    path('auth/', include('auth.urls')),
    path('admin/', admin.site.urls),

]
