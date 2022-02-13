def construct_chemfig_expression(nodes, seq_cluster):
    #print('=============================')
    #print(nodes)
    #print(seq_cluster)
    #print('=============================')

    indexes = set()
    chemlist = []
    for (x, y, atom) in nodes.values():
        chemlist.append(atom)

    for i, seq in enumerate(seq_cluster):
        if i == 0:
            result = chemlist[0:len(seq)]
            continue
        for j, idx in enumerate(seq):
            if j == 0:
                bif = idx
            else:
                result[bif] += f'(-[2]{chemlist[idx]})'
    a = '-'.join(result)
    return a

def make_sentence(chem):
    sentence = f'\
\\documentclass{{article}}\n\
\\usepackage{{chemfig}}\n\
\\begin{{document}}\n\
\\begin{{figure}}[htbp]\n\
    \centering\n\
    \schemestart\n\
    \centering\n\
    \chemfig{{{chem}}}\n\
    \schemestop\n\
\end{{figure}}\n\
\end{{document}}'

    with open('a.txt', mode='w') as f:
        f.write(sentence)

    return sentence