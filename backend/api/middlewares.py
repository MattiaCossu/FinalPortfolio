from django.http import HttpResponseForbidden
import os

class NginxAuthMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        server_auth_header = request.META.get('HTTP_X_SERVER_AUTH')
        if server_auth_header != os.environ.get('TOKEN_NGINX_DJANGO'):
            return HttpResponseForbidden("Access denied")
        return self.get_response(request)