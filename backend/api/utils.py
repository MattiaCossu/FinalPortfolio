import requests
import os
from requests.exceptions import HTTPError, JSONDecodeError

def make_request(endpoint, request_headers):
    url = "https://www.hackthebox.com"
    api_token = os.environ.get('TOKEN_HTB')

    headers = {
        "Authorization": f"Bearer {api_token}",
        "Content-Type": "application/json",
        "User-Agent": request_headers.get('User-Agent')
    }

    session = requests.Session()

    try:
        response = session.get(url + endpoint, headers=headers)
        response.raise_for_status()

        return response, None

    except HTTPError as http_err:
        return None, {
            "error": f"HTTP error occurred: {http_err}",
            "status_code": response.status_code,
        }

    except JSONDecodeError as json_err:
        return None, {
            "error": f"JSON decode error occurred: {json_err}",
            "status_code": response.status_code,
        }

    except Exception as err:
        return None, {
            "error": f"Other error occurred: {err}",
            "status_code": response.status_code,
        }
