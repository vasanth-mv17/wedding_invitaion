const TARGET_DATE = '2026-10-18T11:30:00+05:30';

function updateCountdown() {
  const diff = new Date(TARGET_DATE).getTime() - Date.now();

  if (diff <= 0) {
    ['days','hours','minutes','seconds'].forEach(id =>
      document.getElementById(id).textContent = '00'
    );
    document.getElementById('countNote').textContent =
      'Alhamdulillah — our special day has arrived!';
    return;
  }

  const total = Math.floor(diff / 1000);
  const d = Math.floor(total / 86400);
  const h = Math.floor((total % 86400) / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;

  document.getElementById('days').textContent = String(d).padStart(2,'0');
  document.getElementById('hours').textContent = String(h).padStart(2,'0');
  document.getElementById('minutes').textContent = String(m).padStart(2,'0');
  document.getElementById('seconds').textContent = String(s).padStart(2,'0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Lightweight floating particles across the page.
const layer = document.getElementById('particles');

// Small glowing dots.
for (let i = 0; i < 42; i++) {
  const p = document.createElement('span');
  p.className = 'particle';
  p.style.left = Math.random() * 100 + '%';
  p.style.top = (10 + Math.random() * 90) + '%';
  p.style.setProperty('--x', (Math.random() * 180 - 90) + 'px');
  p.style.setProperty('--d', (5 + Math.random() * 7) + 's');
  p.style.setProperty('--delay', (-Math.random() * 10) + 's');
  p.style.transform = `scale(${0.55 + Math.random() * 0.8})`;
  layer.appendChild(p);
}

// Occasional tiny heart-shaped particles.
for (let i = 0; i < 18; i++) {
  const heart = document.createElement('span');
  heart.className = 'heart-particle';

  const core = document.createElement('span');
  core.className = 'heart-core';
  heart.appendChild(core);

  const size = 0.55 + Math.random() * 0.55;
  heart.style.left = Math.random() * 100 + '%';
  heart.style.top = (15 + Math.random() * 85) + '%';
  heart.style.setProperty('--x', (Math.random() * 160 - 80) + 'px');
  heart.style.setProperty('--d', (6 + Math.random() * 7) + 's');
  heart.style.setProperty('--delay', (-Math.random() * 12) + 's');
  heart.style.transform = `rotate(-45deg) scale(${size})`;

  layer.appendChild(heart);
}

// Get Directions: route from the visitor's current location
// to the exact MS Mahal venue pin supplied by the user.
const directionsBtn = document.getElementById('directionsBtn');

if (directionsBtn) {
  directionsBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const venueMapUrl = 'https://www.google.com/maps/place/M+S+Mahal/@13.058919,80.2682053,960m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a5266227ebdcf03:0xaddd5a7056300a70!8m2!3d13.058919!4d80.2682053!16s%2Fg%2F11byx8q8qc?entry=ttu&g_ep=EgoyMDI2MDgzMC4wIKXMDSoASAFQAw%3D%3D';
    const destination = '13.058919,80.2682053';

    // Google Maps Directions API uses the visitor's GPS coordinates
    // as the route origin and the exact venue coordinates as destination.
    const fallbackUrl =
      'https://www.google.com/maps/dir/?api=1' +
      '&destination=' + encodeURIComponent(destination);

    if (!navigator.geolocation) {
      window.open(venueMapUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      function (position) {
        const origin =
          position.coords.latitude + ',' + position.coords.longitude;

        const mapsUrl =
          'https://www.google.com/maps/dir/?api=1' +
          '&origin=' + encodeURIComponent(origin) +
          '&destination=' + encodeURIComponent(destination);

        window.open(mapsUrl, '_blank', 'noopener,noreferrer');
      },
      function () {
        // If GPS permission is denied/unavailable, open the exact
        // venue pin supplied by the user.
        window.open(venueMapUrl, '_blank', 'noopener,noreferrer');
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  });
}


(function(){
  const translations = {
    en: {
      heroKicker:'WITH THE BLESSINGS OF ALLAH<br>WE INVITE YOU TO CELEBRATE THE WEDDING OF',
      arshak:'Arshak', hajeera:'Hajeera',
      heroDate:'SUNDAY, OCTOBER 18, 2026 · 11:30 AM',
      scroll:'↓ &nbsp; SCROLL TO EXPLORE &nbsp; ↓',
      storyKicker:'OUR STORY', storyTitle:'Two Hearts. One Prayer.',
      storyText:'A journey written by Allah,<br>woven with love, trust and destiny.<br>Together, we seek His pleasure<br>and look forward to a lifetime<br>of endless barakah.',
      countKicker:'THE COUNTDOWN', countTitle:'Until Our Nikah',
      countDate:'SUNDAY, OCTOBER 18, 2026 · 11:30 AM',
      daysLabel:'Days', hoursLabel:'Hours', minutesLabel:'Minutes', secondsLabel:'Seconds',
      countNote:'Counting down to the beginning of our beautiful journey together',
      specialKicker:'THE SPECIAL DAY', joinUs:'Join Us', dateHeading:'DATE',
      eventDate:'Sunday, October 18, 2026', eventTime:'11:30 AM',
      venueHeading:'VENUE', venueName:'MS Mahal',
      address:'Old No. 41, New No. 48,<br>C.P. Kovil Street, Royapettah,<br>Chennai – 600 014<br>',
      landmark:'(Opp. Amir Mahal, near Express Avenue)',
      directions:'📍 Get Directions',
      footerNames:'Arshak &amp; Hajeera',
      verse:'“And We created you in pairs.”',
      footerSmall:'WITH LOVE, PRAYERS &amp; BLESSINGS'
    },
    ta: {
      heroKicker:'அல்லாஹ்வின் அருளுடன்<br>உங்களை எங்கள் திருமண விழாவிற்கு அன்புடன் அழைக்கிறோம்',
      arshak:'அர்ஷக்', hajeera:'ஹஜீரா',
      heroDate:'ஞாயிற்றுக்கிழமை, அக்டோபர் 18, 2026 · காலை 11:30 மணி',
      scroll:'↓ &nbsp; மேலும் காண கீழே செல்லவும் &nbsp; ↓',
      storyKicker:'எங்கள் கதை', storyTitle:'இரு இதயங்கள். ஒரே பிரார்த்தனை.',
      storyText:'அல்லாஹ்வால் எழுதப்பட்ட பயணம்,<br>அன்பு, நம்பிக்கை மற்றும் விதியால் பின்னப்பட்டது.<br>அவரது திருப்தியை நாடி,<br>என்றென்றும் பரக்கத் நிறைந்த<br>இல்லற வாழ்வை எதிர்நோக்குகிறோம்.',
      countKicker:'திருமணத்திற்கான கவுண்ட்டவுன்', countTitle:'எங்கள் நிக்காஹ் வரை',
      countDate:'ஞாயிற்றுக்கிழமை, அக்டோபர் 18, 2026 · காலை 11:30 மணி',
      daysLabel:'நாட்கள்', hoursLabel:'மணிநேரம்', minutesLabel:'நிமிடங்கள்', secondsLabel:'விநாடிகள்',
      countNote:'எங்கள் அழகான புதிய வாழ்க்கைப் பயணத்தின் தொடக்கத்திற்கான கவுண்ட்டவுன்',
      specialKicker:'சிறப்பு நாள்', joinUs:'எங்களுடன் இணைந்திடுங்கள்', dateHeading:'தேதி',
      eventDate:'ஞாயிற்றுக்கிழமை, அக்டோபர் 18, 2026', eventTime:'காலை 11:30 மணி',
      venueHeading:'இடம்', venueName:'எம்.எஸ். மஹால்',
      address:'பழைய எண் 41, புதிய எண் 48,<br>சி.பி. கோவில் தெரு, ராயப்பேட்டை,<br>சென்னை – 600 014<br>',
      landmark:'(அமீர் மஹால் எதிரில், எக்ஸ்பிரஸ் அவென்யூ அருகில்)',
      directions:'📍 வழியைப் பெறுக',
      footerNames:'அர்ஷக் &amp; ஹஜீரா',
      verse:'“நாம் உங்களை ஜோடிகளாகப் படைத்தோம்.”',
      footerSmall:'அன்பு, பிரார்த்தனைகள் &amp; ஆசீர்வாதங்களுடன்'
    }
  };

  function setLanguage(lang){
    const dict=translations[lang];
    document.documentElement.lang=lang==='ta'?'ta':'en';
    document.body.classList.toggle('lang-ta',lang==='ta');
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key=el.getAttribute('data-i18n');
      if(dict[key]!==undefined) el.innerHTML=dict[key];
    });
    document.getElementById('langEnglish').classList.toggle('active',lang==='en');
    document.getElementById('langTamil').classList.toggle('active',lang==='ta');
    document.getElementById('langEnglish').setAttribute('aria-pressed',lang==='en');
    document.getElementById('langTamil').setAttribute('aria-pressed',lang==='ta');
  }
  document.getElementById('langEnglish').addEventListener('click',()=>setLanguage('en'));
  document.getElementById('langTamil').addEventListener('click',()=>setLanguage('ta'));
  setLanguage('en');

  // Keep the countdown's arrival message translated after the existing timer updates it.
  const note=document.getElementById('countNote');
  if(note){
    const observer=new MutationObserver(()=>{
      if(note.textContent.includes('Alhamdulillah')){
        note.innerHTML=document.documentElement.lang==='ta'
          ? 'அல்ஹம்துலில்லாஹ் — எங்கள் சிறப்பு நாள் வந்துவிட்டது!'
          : 'Alhamdulillah — our special day has arrived!';
      }
    });
    observer.observe(note,{childList:true,characterData:true,subtree:true});
  }
})();

/* Remo — First Sight Background Score */
const musicToggle = document.getElementById('musicToggle');
const musicLabel = document.getElementById('musicLabel');

const weddingMusic = new Audio('remo-first-sight-background-score.mp3');
weddingMusic.loop = true;
weddingMusic.preload = 'auto';
weddingMusic.volume = 0.18;

function updateMusicButton(isPlaying) {
  if (!musicToggle) return;
  musicToggle.classList.toggle('is-playing', isPlaying);
  musicToggle.setAttribute('aria-pressed', String(isPlaying));
  musicToggle.setAttribute(
    'aria-label',
    isPlaying ? 'Pause Remo music' : 'Play Remo music'
  );
  musicToggle.title = isPlaying ? 'Pause music' : 'Play music';

  if (musicLabel) musicLabel.textContent = isPlaying ? 'Pause' : 'Music';

  const icon = musicToggle.querySelector('.music-icon');
  if (icon) icon.textContent = isPlaying ? '❚❚' : '♫';
}

if (musicToggle) {
  musicToggle.addEventListener('click', async () => {
    if (weddingMusic.paused) {
      try {
        await weddingMusic.play();
        updateMusicButton(true);
      } catch (error) {
        console.warn(
          'Could not play remo-first-sight-background-score.mp3. ' +
          'Place the MP3 in the same folder as index.html.',
          error
        );
        if (musicLabel) musicLabel.textContent = 'Add MP3';
      }
    } else {
      weddingMusic.pause();
      updateMusicButton(false);
    }
  });

  weddingMusic.addEventListener('play', () => updateMusicButton(true));
  weddingMusic.addEventListener('pause', () => updateMusicButton(false));
}


(function(){
  'use strict';

  const opener = document.getElementById('curtain-opener');
  const enter = document.getElementById('enter-invitation');
  const gateEnglish = document.getElementById('gateEnglish');
  const gateTamil = document.getElementById('gateTamil');
  const gateMusic = document.getElementById('gateMusic');

  if (!opener || !enter) return;

  document.body.style.overflow = 'hidden';

  function setGateLanguage(lang) {
    const tamil = lang === 'ta';

    gateEnglish.classList.toggle('active', !tamil);
    gateTamil.classList.toggle('active', tamil);
    gateEnglish.setAttribute('aria-pressed', String(!tamil));
    gateTamil.setAttribute('aria-pressed', String(tamil));

    const kicker = opener.querySelector('.opener-kicker');
    const date = opener.querySelector('.opener-date');
    const note = opener.querySelector('.opener-note');
    const names = opener.querySelector('.opener-names');
    const enterButton = opener.querySelector('#enter-invitation');

    if (names) {
  names.innerHTML = tamil
    ? 'அர்ஷக்<div class="opener-amp">&amp;</div>ஹஜீரா'
    : 'Arshak<div class="opener-amp">&amp;</div>Hajeera';
}
    if (enterButton) {
  enterButton.innerHTML = tamil
    ? 'அழைப்பிதழைத் திறக்கவும் ♥'
    : 'ENTER INVITATION ♥';
}

    if (kicker) {
      kicker.innerHTML = tamil
        ? 'எங்கள் குடும்பங்களுடன் இணைந்து<br>எங்கள் திருமணத்தை கொண்டாட<br>உங்களை அன்புடன் அழைக்கிறோம்'
        : 'Together with their families<br>We invite you to celebrate the wedding of';
    }

    if (date) {
      date.textContent = tamil
        ? 'ஞாயிற்றுக்கிழமை · அக்டோபர் 18 · 2026ி'
        : 'SUNDAY · OCTOBER 18 · 2026';
    }

    if (note) {
      note.innerHTML = tamil
        ? 'இரண்டு இதயங்கள், ஒரு அழகான பயணம்.<br>அன்பின் வாழ்நாள் தொடங்குகிறது...'
        : 'Two hearts, one beautiful journey.<br>A lifetime of love begins...';
    }

    // Synchronize with the existing page language buttons.
    const pageButton = document.getElementById(tamil ? 'langTamil' : 'langEnglish');
    if (pageButton) pageButton.click();
  }

  gateEnglish.addEventListener('click', function(){
    setGateLanguage('en');
  });

  gateTamil.addEventListener('click', function(){
    setGateLanguage('ta');
  });

  // Session-only state: remembers whether the curtain music control
  // has ever been used during this page session.
  const hasCurtainMusicPlayed = sessionStorage.getItem('hasCurtainMusicPlayed') === 'true';

  function updateGateMusicButton(isPlaying) {
    if (!gateMusic) return;

    gateMusic.classList.toggle('is-playing', isPlaying);
    gateMusic.setAttribute('aria-pressed', String(isPlaying));
    gateMusic.setAttribute('aria-label', isPlaying ? 'Pause Remo music' : 'Play Remo music');
    gateMusic.title = isPlaying ? 'Pause music' : 'Play music';

    const icon = gateMusic.querySelector('.gate-music-icon');
    const label = gateMusic.querySelector('.gate-music-label');
    if (icon) icon.textContent = isPlaying ? '❚❚' : '♫';
    if (label) label.textContent = isPlaying ? 'Pause' : 'Music';
  }

  // Keep the curtain control synchronized with the single shared Audio object.
  if (typeof weddingMusic !== 'undefined' && weddingMusic) {
    weddingMusic.addEventListener('play', function(){
      updateGateMusicButton(true);
    });
    weddingMusic.addEventListener('pause', function(){
      updateGateMusicButton(false);
    });
  }

  // Curtain Music control: play/pause the SAME audio object used by the page.
  if (gateMusic) {
    gateMusic.addEventListener('click', async function(){
      if (typeof weddingMusic === 'undefined' || !weddingMusic) return;

      if (weddingMusic.paused) {
        try {
          await weddingMusic.play();
          sessionStorage.setItem('hasCurtainMusicPlayed', 'true');
          updateGateMusicButton(true);
        } catch (error) {
          console.warn(
            'Could not play remo-first-sight-background-score.mp3. ' +
            'Place the MP3 in the same folder as index.html.',
            error
          );
          updateGateMusicButton(false);
        }
      } else {
        weddingMusic.pause();
        updateGateMusicButton(false);
      }
    });
  }

  // Enter Invitation never resets or recreates the audio.
  // If music is already playing, leave it alone. If it is paused/not started,
  // start the same shared Audio object from its current position.
  function startWeddingMusic() {
    if (typeof weddingMusic === 'undefined' || !weddingMusic) return Promise.resolve();

    if (!weddingMusic.paused) {
      return Promise.resolve();
    }

    weddingMusic.volume = 0.18;
    weddingMusic.loop = true;

    return weddingMusic.play().then(function(){
      // This flag is also set when Enter Invitation starts music.
      sessionStorage.setItem('hasCurtainMusicPlayed', 'true');
      if (typeof updateMusicButton === 'function') updateMusicButton(true);
      updateGateMusicButton(true);
    }).catch(function(error){
      console.warn(
        'Could not play remo-first-sight-background-score.mp3. ' +
        'Keep the MP3 in the same folder as index.html.',
        error
      );
    });
  }

  // Restore the correct curtain button state if this script runs after playback.
  updateGateMusicButton(
    typeof weddingMusic !== 'undefined' && weddingMusic && !weddingMusic.paused
  );


  /* Curtain-only floating dots and heart particles. */
  const curtainParticleLayer = document.getElementById('curtain-particles');

  if (curtainParticleLayer) {
    for (let i = 0; i < 34; i++) {
      const p = document.createElement('span');
      p.className = 'curtain-particle';

      // Keep particles spread across both curtain panels while leaving
      // the center invitation card visually clean.
      const side = Math.random() < 0.5 ? 'left' : 'right';
      const x = side === 'left'
        ? (2 + Math.random() * 45)
        : (53 + Math.random() * 45);

      p.style.left = x + '%';
      p.style.top = (8 + Math.random() * 88) + '%';
      p.style.setProperty('--cp-x', (Math.random() * 90 - 45) + 'px');
      p.style.setProperty('--cp-duration', (5.5 + Math.random() * 5) + 's');
      p.style.setProperty('--cp-delay', (-Math.random() * 9) + 's');
      p.style.transform = `scale(${0.55 + Math.random() * 0.85})`;

      curtainParticleLayer.appendChild(p);
    }

    for (let i = 0; i < 10; i++) {
      const heart = document.createElement('span');
      heart.className = 'curtain-heart';

      const core = document.createElement('span');
      core.className = 'curtain-heart-core';
      heart.appendChild(core);

      const side = Math.random() < 0.5 ? 'left' : 'right';
      const x = side === 'left'
        ? (4 + Math.random() * 42)
        : (54 + Math.random() * 42);

      heart.style.left = x + '%';
      heart.style.top = (18 + Math.random() * 76) + '%';
      heart.style.setProperty('--cp-x', (Math.random() * 80 - 40) + 'px');
      heart.style.setProperty('--cp-duration', (6 + Math.random() * 5) + 's');
      heart.style.setProperty('--cp-delay', (-Math.random() * 10) + 's');

      curtainParticleLayer.appendChild(heart);
    }
  }

  enter.addEventListener('click', function(){
    if (opener.classList.contains('is-opening')) return;

    enter.disabled = true;

    // User interaction unlocks browser audio playback here.
    // Music starts exactly when Enter Invitation is pressed.
    startWeddingMusic();

    // Start curtain opening.
    opener.classList.add('is-opening');

    window.setTimeout(function(){
      if (opener.parentNode) {
        opener.parentNode.removeChild(opener);
      }

      document.body.style.overflow = '';
      window.scrollTo(0, 0);
    }, 1500);
  });

  setGateLanguage('en');
})();
