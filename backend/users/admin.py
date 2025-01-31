from django.contrib import admin

from .models import LogIn

class LogInAdmin(admin.ModelAdmin):
    list_display = ['username', 'password']

admin.site.register(LogIn, LogInAdmin)
