# rename and reorganize (by category) EmojiOne SVGs

import json
import os
import shutil

from collections import defaultdict


BASE_ORIG = '../img/emoji-raw'
BASE_NEW = '../img'


with open('emoji-meta.json') as f:
    data = json.loads(f.read())

by_cat = defaultdict(list)
lookup = {}

for key, info in data.items():
    code = info['unicode']
    lookup[code] = key
    by_cat[info['category']].append({
        'unicode': code,
        'name': key,
    })

final = defaultdict(list)

for cat, emojis in by_cat.items():
    os.makedirs('{}/{}'.format(BASE_NEW, cat))

    for e in emojis:
        code, name = e['unicode'], e['name']

        # skip skin tone variants (for now)
        if '_tone' in name:
            continue

        # ignore if file doesn't exist
        old_file = '{}/{}.svg'.format(BASE_ORIG, code)
        if not os.path.exists(old_file):
            print('cannot find svg file for {}'.format(name))
            continue

        final[cat].append(name)
        new_file = '{}/{}/{}.svg'.format(BASE_NEW, cat, name)
        shutil.copy(old_file, new_file)

print(json.dumps(final))
