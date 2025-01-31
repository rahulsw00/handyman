from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import LogIn
from .serializers import LogInSerializer

class LogInView(APIView): # Create a new class based view called LogInView
    def post(self, request, format=None):
        serializer = LogInSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Login Successful.'},serializer.data, status=status.HTTP_201_CREATED) # Return a response with a message and the data
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) # Return a response with the errors and a bad request status


