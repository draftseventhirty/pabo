const BASE = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

document.getElementById('word-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') lookupWord();
});

function lookupWord() {
  const word = document.getElementById('word-input').value.trim();
  const result = document.getElementById('result');
  if (!word) return;

  result.textContent = 'Loading…';

  fetch(BASE + encodeURIComponent(word))
    .then(r => {
      if (!r.ok) throw new Error('Not found');
      return r.json();
    })
    .then(render)
    .catch(() => {
      result.textContent = 'Word not found.';
    });
}

function render(entries) {
  const result = document.getElementById('result');
  result.innerHTML = '';

  entries.forEach(entry => {
    const phonetic = entry.phonetics?.find(p => p.text)?.text || entry.phonetic || '';
    const audio = entry.phonetics?.find(p => p.audio)?.audio || '';

    const heading = document.createElement('h2');
    heading.textContent = entry.word + (phonetic ? '  ' + phonetic : '');
    result.appendChild(heading);

    if (audio) {
      const btn = document.createElement('button');
      btn.textContent = '▶ Play';
      btn.onclick = () => new Audio(audio).play();
      result.appendChild(btn);
    }

    entry.meanings.forEach(meaning => {
      const pos = document.createElement('h3');
      pos.textContent = meaning.partOfSpeech;
      result.appendChild(pos);

      const ol = document.createElement('ol');
      meaning.definitions.forEach(def => {
        const li = document.createElement('li');
        li.textContent = def.definition;
        if (def.example) {
          const em = document.createElement('em');
          em.textContent = ' "' + def.example + '"';
          li.appendChild(em);
        }
        ol.appendChild(li);
      });
      result.appendChild(ol);

      if (meaning.synonyms?.length) {
        const p = document.createElement('p');
        p.textContent = 'Synonyms: ' + meaning.synonyms.join(', ');
        result.appendChild(p);
      }
      if (meaning.antonyms?.length) {
        const p = document.createElement('p');
        p.textContent = 'Antonyms: ' + meaning.antonyms.join(', ');
        result.appendChild(p);
      }
    });

    const hr = document.createElement('hr');
    result.appendChild(hr);
  });
}
