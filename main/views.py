from django.shortcuts import render
from django.conf import settings
from django.http import JsonResponse

import json
from .utils import *

from matplotlib.font_manager import json_load

def index(request):
    return render(request, 'main/index.html', {})

def ajax_number(request):
    nodes = request.POST.get("nodes")
    seq_cluster = request.POST.get("seq_cluster")
    direct_cluster = request.POST.get("direct_cluster")
    nodes_dict = json.loads(nodes)
    seq_cluster_dict = json.loads(seq_cluster)
    direct_cluster_dict = json.loads(direct_cluster) 
    chem = construct_chemfig_expression(nodes_dict, seq_cluster_dict,
                                        direct_cluster_dict)
    sentence = make_sentence(chem)
    d = {
        'sentence':repr(sentence)
    }
    return JsonResponse(d)