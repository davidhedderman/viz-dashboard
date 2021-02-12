from django.contrib.auth.decorators import login_required
from django.shortcuts import (
    redirect,
    render,
)


@login_required
def index(request):
    if not request.user.is_authenticated:
        return redirect(request, 'users/accounts/login', {})
    return render(request, 'dashboard/index.html', {})
