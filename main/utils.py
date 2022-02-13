conv_table = {1:'[2]', 2:'[4]', 3:'[6]', 4:'[1]', 5:'[3]', 6:'[5]',
            7:'[7]',8:'[:30]', 9:'[:60]', 10:'[:120]', 11:'[:150]', 12:'[:-150]',
            13:'[:-120]', 14:'[:-60]', 15:'[:-30]'}

def construct_chemfig_expression(nodes, seq_cluster, direct_cluster):
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
            for j, direct in enumerate(direct_cluster[0]):
                #chemfigでは右方向は指定しなくて良いため0は飛ばす
                if direct == 0:
                    continue
                result[j+1] = conv_table[direct] + result[j+1] 

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