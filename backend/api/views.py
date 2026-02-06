from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def hello_world(request):
    """
    Notre première API !
    Retourne un message de bienvenue
    """
    data = {
        'message': 'Hello from Django! 🚀',
        'status': 'success',
        'project': 'Casier Judiciaire - Sénégal',
        'backend': 'Django REST Framework',
        'frontend': 'React + TailwindCSS',
    }
    return Response(data)