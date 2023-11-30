from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views.decorators.csrf import requires_csrf_token
from django.utils.translation import gettext as _
from .utils import make_request
from typing import Union, Any, Dict

@requires_csrf_token
def custom_page_not_found(request: Any, exception: Exception):
    return Response({'error': _('Page not found')}, status=404)

@api_view(['GET'])
def get_user_profile(request: Any) -> Response:
    response: Union[requests.Response, None]
    error: Union[Dict[str, Any], None]
    
    response, error = make_request('/api/v4/user/profile/basic/651314', request.headers)

    if error:
        return Response({"error": error['error']}, status=error['status_code'])

    if response and response.status_code == 200:
        profile = response.json().get('profile')
        if profile:
            res = {
                'name': profile.get('name'),
                'rank': profile.get('rank'),
                'team': profile.get('team'),
                'avatar': profile.get('avatar'),
            }
            return Response(res, status=200)
        else:
            return Response({"error": "Profile data not found"}, status=404)
    else:
        return Response({"error": "Empty or invalid response received"}, status=500)

@api_view(['GET'])
def get_user_activity(request: Any) -> Response:
    response: Union[requests.Response, None]
    error: Union[Dict[str, Any], None]
    
    response, error = make_request('/api/v4/profile/activity/5833', request.headers)
    
    if error:
        return Response({"error": error['error']}, status=error['status_code'])
    
    if response and response.status_code == 200:
        profile = response.json().get('profile').get('activity')
        if profile:
            return Response(profile, status=200)
        else:
            return Response({"error": "Profile data not found"}, status=404)
    else:
        return Response({"error": "Empty or invalid response received"}, status=500)
    