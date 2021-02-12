import logging

from allauth.account.adapter import DefaultAccountAdapter

logger = logging.getLogger(__name__)


class UsersAdapter(DefaultAccountAdapter):
    def get_login_redirect_url(self, request):
        """
        Redirect user post login
        """
        return "/"

    def get_logout_redirect_url(self, request):
        return "/"  # default to home page

    def get_email_confirmation_redirect_url(self, request):
        return "/accounts/login/"  # default to home page
