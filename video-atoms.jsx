// video-atoms.jsx — reusable visual atoms for the Seminario 8 animation.
// All editorial-engraving DNA copied from the deck: paper, ink, red, neon-terminal.

// ── Tokens ────────────────────────────────────────────────────────────────
const TK = {
  paper: '#fbfaf5',
  paperWarm: '#f5f1e6',
  paperDark: '#ebe6d8',
  ink: '#16140f',
  ink2: '#3a3733',
  ink3: '#6a665e',
  rule: 'rgba(22,20,15,.18)',
  ruleStrong: 'rgba(22,20,15,.4)',
  accent: '#8b1a1a',
  accent2: '#6a1212',
  gold: '#a67a2c',
  termBg: '#0c1318',
  termLine: '#173029',
  termNeon: '#3fe0a0',
  termNeon2: '#9af5cf',
  termDim: '#6a8a80',
  termText: '#cfe9dd',
  termCit: '#9ad5f5',
  termErr: '#f08070',
  serifDisplay: '"EB Garamond", Georgia, serif',
  serifBody: '"Spectral", Georgia, serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

// ── Paper background with grain ───────────────────────────────────────────
function PaperBg({ tone = TK.paper, dark = false, children }) {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: dark ? TK.termBg : tone,
      overflow: 'hidden',
    }}>
      {/* warm vignette */}
      {!dark && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 50% 45%, rgba(255,250,235,0) 0%, rgba(22,20,15,.06) 70%, rgba(22,20,15,.18) 100%)',
          pointerEvents: 'none',
        }}/>
      )}
      {/* paper grain — fine svg noise */}
      {!dark && (
        <svg style={{position:'absolute',inset:0,width:'100%',height:'100%',opacity:.5,mixBlendMode:'multiply'}}>
          <filter id="grainf">
            <feTurbulence baseFrequency="0.9" numOctaves="2" seed="3"/>
            <feColorMatrix values="0 0 0 0 0.09  0 0 0 0 0.08  0 0 0 0 0.06  0 0 0 0.06 0"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#grainf)"/>
        </svg>
      )}
      {children}
    </div>
  );
}

// ── Fleur ornament ────────────────────────────────────────────────────────
function Fleur({ x, y, size = 60, color = TK.accent, rotation = 0, opacity = 1 }) {
  return (
    <svg style={{position:'absolute',left:x,top:y,width:size,height:size,transform:`translate(-50%,-50%) rotate(${rotation}deg)`,opacity}} viewBox="0 0 40 40">
      <path d="M20 4 C 22 12, 28 14, 36 16 C 28 18, 22 20, 20 28 C 18 20, 12 18, 4 16 C 12 14, 18 12, 20 4 Z" fill={color}/>
      <circle cx="20" cy="36" r="1.5" fill={color}/>
    </svg>
  );
}

// ── Hairline rule with optional fleur mid ─────────────────────────────────
function Rule({ x, y, width, color = TK.ink, opacity = 1, withFleur = false }) {
  return (
    <div style={{position:'absolute',left:x,top:y,transform:'translate(-50%,-50%)',width,height:20,display:'flex',alignItems:'center',justifyContent:'center',opacity}}>
      <div style={{flex:1,height:1,background:color}}/>
      {withFleur && <svg width="22" height="22" viewBox="0 0 40 40" style={{margin:'0 14px'}}>
        <path d="M20 4 C 22 12, 28 14, 36 16 C 28 18, 22 20, 20 28 C 18 20, 12 18, 4 16 C 12 14, 18 12, 20 4 Z" fill={color}/>
      </svg>}
      <div style={{flex:1,height:1,background:color}}/>
    </div>
  );
}

// ── Mask-reveal text (letter by letter) ───────────────────────────────────
function RevealText({
  text, x, y, size = 72, weight = 500, italic = false,
  color = TK.ink, font = TK.serifDisplay,
  startAt = 0, duration = 1.2,
  align = 'center', tracking = '-0.01em',
  showCaret = false,
}) {
  const { localTime } = useSprite();
  const t = clamp((localTime - startAt) / duration, 0, 1);
  // letter-by-letter reveal: clip-path width
  const eased = Easing.easeOutCubic(t);
  const pct = eased * 100;
  const translateX = align === 'center' ? '-50%' : align === 'right' ? '-100%' : '0';
  return (
    <div style={{
      position:'absolute', left:x, top:y,
      transform:`translate(${translateX}, -50%)`,
      fontFamily:font, fontSize:size, fontWeight:weight,
      fontStyle: italic ? 'italic' : 'normal',
      color, letterSpacing:tracking, lineHeight:1.05,
      whiteSpace:'nowrap',
    }}>
      <span style={{
        clipPath: `inset(0 ${100-pct}% 0 0)`,
        WebkitClipPath: `inset(0 ${100-pct}% 0 0)`,
        display:'inline-block',
      }}>{text}</span>
      {showCaret && t < 1 && (
        <span style={{
          display:'inline-block', width:2, height:'.85em',
          background:color, marginLeft:4, verticalAlign:'-12%',
          opacity: Math.floor(localTime*4)%2 ? 1 : 0.2,
        }}/>
      )}
    </div>
  );
}

// ── Stamp text — pressed-into-page feel, rotated, ink-bleed ──────────────
function Stamp({
  text, x, y, size = 80, color = TK.accent,
  rotation = -2.5, weight = 700, italic = true,
  startAt = 0, duration = 0.6, font = TK.serifDisplay,
  letterSpacing = '0.02em',
}) {
  const { localTime } = useSprite();
  const t = clamp((localTime - startAt) / duration, 0, 1);
  const eased = Easing.easeOutBack(t);
  const opacity = clamp((localTime - startAt) / 0.15, 0, 1);
  const scale = 0.6 + eased * 0.4;
  return (
    <div style={{
      position:'absolute', left:x, top:y,
      transform:`translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
      transformOrigin:'center',
      fontFamily: font, fontSize: size, fontWeight: weight,
      fontStyle: italic ? 'italic' : 'normal',
      color, opacity, letterSpacing,
      textShadow: `0 0 1px ${color}66`,
      filter: t < 0.5 ? 'blur(.3px)' : 'none',
      whiteSpace:'nowrap', lineHeight:1,
    }}>{text}</div>
  );
}

// ── Folio / small caps label ──────────────────────────────────────────────
function Folio({ x, y, text, color = TK.ink3, size = 18, align = 'center' }) {
  const { localTime, duration } = useSprite();
  const opacity = clamp(localTime / 0.5, 0, 1) * clamp((duration - localTime) / 0.4, 0, 1);
  return (
    <div style={{
      position:'absolute', left:x, top:y,
      transform: `translate(${align==='center'?'-50%':align==='right'?'-100%':'0'}, -50%)`,
      fontFamily: TK.mono, fontSize: size,
      color, letterSpacing: '0.32em', textTransform:'uppercase',
      opacity,
    }}>{text}</div>
  );
}

// ── Drop cap ──────────────────────────────────────────────────────────────
function DropCap({ x, y, letter, size = 220, color = TK.accent, startAt = 0 }) {
  const { localTime } = useSprite();
  const t = clamp((localTime - startAt) / 0.8, 0, 1);
  const eased = Easing.easeOutBack(t);
  return (
    <div style={{
      position:'absolute', left:x, top:y,
      transform:`translate(-50%,-50%) scale(${0.7 + eased * 0.3})`,
      fontFamily: TK.serifDisplay, fontSize: size, fontWeight: 700,
      color, opacity: t, lineHeight: 0.9,
      filter: `drop-shadow(0 0 1px ${color}66)`,
    }}>{letter}</div>
  );
}

// ── Classical column — drawn allegorically ───────────────────────────────
function ColumnGfx({ x, y, height = 360, width = 80, label, sublabel, color = TK.ink, accent = TK.accent, startAt = 0, fall = true }) {
  const { localTime } = useSprite();
  const t = clamp((localTime - startAt) / 1.0, 0, 1);
  const eased = Easing.easeOutCubic(t);
  const ty = fall ? (1 - eased) * -80 : (1 - eased) * 40;
  const opacity = t;
  // labels appear after column
  const lt = clamp((localTime - startAt - 0.7) / 0.6, 0, 1);

  const capWidth = width * 1.4;
  const baseWidth = width * 1.5;
  const shaftFlute = 6; // flutes

  return (
    <div style={{position:'absolute', left:x, top:y, transform:`translate(-50%, 0) translateY(${ty}px)`, opacity}}>
      <svg width={baseWidth + 40} height={height + 100} viewBox={`0 0 ${baseWidth + 40} ${height + 100}`}>
        <g transform={`translate(${(baseWidth+40)/2}, 0)`}>
          {/* capital */}
          <rect x={-capWidth/2 - 4} y={6} width={capWidth + 8} height={10} fill={color}/>
          <rect x={-capWidth/2} y={16} width={capWidth} height={14} fill={color}/>
          {/* volutes */}
          <circle cx={-capWidth/2 + 10} cy={24} r={6} fill="none" stroke={color} strokeWidth={1.5}/>
          <circle cx={capWidth/2 - 10} cy={24} r={6} fill="none" stroke={color} strokeWidth={1.5}/>
          <rect x={-capWidth/2 + 6} y={30} width={capWidth - 12} height={6} fill={color}/>

          {/* shaft */}
          <rect x={-width/2} y={36} width={width} height={height - 60} fill={color} opacity={.92}/>
          {/* flutes */}
          {Array.from({length: shaftFlute}).map((_,i) => (
            <line key={i}
              x1={-width/2 + (width/shaftFlute)*(i+0.5)} y1={42}
              x2={-width/2 + (width/shaftFlute)*(i+0.5)} y2={height - 30}
              stroke={TK.paper} strokeWidth={1} opacity={.35}
            />
          ))}

          {/* base */}
          <rect x={-baseWidth/2 + 6} y={height - 24} width={baseWidth - 12} height={6} fill={color}/>
          <rect x={-baseWidth/2} y={height - 18} width={baseWidth} height={12} fill={color}/>
          <rect x={-baseWidth/2 - 4} y={height - 6} width={baseWidth + 8} height={10} fill={color}/>

          {/* accent stamp at top — small fleur */}
          <g transform={`translate(0, -8) scale(.55)`} opacity={lt}>
            <path d="M0 -16 C 4 -8, 14 -4, 24 0 C 14 4, 4 8, 0 16 C -4 8, -14 4, -24 0 C -14 -4, -4 -8, 0 -16 Z" fill={accent}/>
          </g>
        </g>
      </svg>
      {/* label cartouche */}
      <div style={{
        marginTop: 16, textAlign: 'center',
        opacity: lt, transform: `translateY(${(1-lt)*8}px)`,
      }}>
        <div style={{
          fontFamily: TK.mono, fontSize: 13, color: TK.ink3,
          letterSpacing: '.32em', textTransform: 'uppercase', marginBottom: 8,
        }}>{sublabel}</div>
        <div style={{
          fontFamily: TK.serifDisplay, fontSize: 30, fontWeight: 600, fontStyle: 'italic',
          color: accent, lineHeight: 1.05,
        }}>{label}</div>
      </div>
    </div>
  );
}

// ── Janus head — two profile silhouettes back-to-back ────────────────────
function JanusHead({ x, y, size = 280, startAt = 0, pulseSide = 0 /* -1 left, 1 right, 0 none */ }) {
  const { localTime } = useSprite();
  const t = clamp((localTime - startAt) / 1.0, 0, 1);
  const eased = Easing.easeOutCubic(t);
  const leftPulse = pulseSide === -1 ? 1 + Math.sin(localTime * 4) * .04 : 1;
  const rightPulse = pulseSide === 1 ? 1 + Math.sin(localTime * 4) * .04 : 1;
  return (
    <svg style={{position:'absolute', left:x, top:y, transform: `translate(-50%,-50%) scale(${.6 + eased*.4})`, opacity: t}} width={size} height={size*1.2} viewBox="0 0 300 360">
      {/* pedestal */}
      <rect x="60" y="320" width="180" height="20" fill={TK.ink}/>
      <rect x="50" y="332" width="200" height="14" fill={TK.ink}/>
      {/* left profile (protector) */}
      <g transform={`translate(150, 180) scale(${leftPulse})`} transformOrigin="0 0">
        <path d="M 0 -140 C -50 -140, -90 -100, -90 -50 C -90 0, -80 40, -70 80 C -60 110, -50 130, -30 140 L 0 140 L 0 -140 Z" fill={TK.ink}/>
        {/* eye */}
        <circle cx="-50" cy="-30" r="3" fill={TK.paper}/>
        {/* laurel on head */}
        <g transform="translate(-30, -130)" fill="none" stroke={TK.paper} strokeWidth="1.5">
          <path d="M0 0 Q -10 -8, -22 -6"/>
          <path d="M-22 -6 Q -32 -10, -40 -16"/>
          <path d="M-40 -16 Q -50 -22, -52 -32"/>
        </g>
      </g>
      {/* right profile (violator) */}
      <g transform={`translate(150, 180) scale(${rightPulse})`} transformOrigin="0 0">
        <path d="M 0 -140 C 50 -140, 90 -100, 90 -50 C 90 0, 80 40, 70 80 C 60 110, 50 130, 30 140 L 0 140 L 0 -140 Z" fill={TK.accent}/>
        {/* eye */}
        <circle cx="50" cy="-30" r="3" fill={TK.paper}/>
        {/* crown of thorns */}
        <g transform="translate(30, -130)" fill="none" stroke={TK.paper} strokeWidth="1.5">
          <path d="M0 0 L 6 -8 L 4 -16 L 12 -10 L 18 -18 L 16 -8 L 26 -12 L 22 -2 L 32 0"/>
        </g>
      </g>
      {/* dividing line */}
      <line x1="150" y1="40" x2="150" y2="320" stroke={TK.paper} strokeWidth="1.5" opacity=".5"/>
    </svg>
  );
}

// ── A simple phone with INSS denial ──────────────────────────────────────
function PhoneFrame({ x, y, scale = 1, startAt = 0, screenContent }) {
  const { localTime } = useSprite();
  const t = clamp((localTime - startAt) / 0.8, 0, 1);
  const eased = Easing.easeOutCubic(t);
  const phoneScale = scale * (0.85 + eased * 0.15);
  return (
    <div style={{
      position:'absolute', left:x, top:y,
      transform:`translate(-50%,-50%) scale(${phoneScale})`,
      transformOrigin:'center', opacity: t,
    }}>
      <div style={{
        width: 380, height: 760,
        background: '#1a1a1a',
        borderRadius: 56,
        padding: 12,
        boxShadow: '0 30px 80px rgba(0,0,0,.45), 0 0 0 2px #2a2a2a inset',
      }}>
        <div style={{
          width: '100%', height: '100%',
          background: TK.paper,
          borderRadius: 44,
          overflow: 'hidden', position: 'relative',
        }}>
          {/* notch */}
          <div style={{
            position:'absolute', top: 16, left: '50%', transform:'translateX(-50%)',
            width: 110, height: 28, background:'#1a1a1a', borderRadius: 14, zIndex: 2,
          }}/>
          {screenContent}
        </div>
      </div>
    </div>
  );
}

// ── Black box diagram ────────────────────────────────────────────────────
function BlackBox({ x, y, width = 1100, height = 320, startAt = 0 }) {
  const { localTime } = useSprite();
  const t = clamp((localTime - startAt) / 0.8, 0, 1);
  const opacity = t;
  // Inside scramble — random characters cycling
  const scrambleT = Math.max(0, localTime - startAt - 0.6);
  const chars = '?▓░▒█▞▚█▓░▒?#@%&';
  const lines = [];
  for (let i = 0; i < 4; i++) {
    let line = '';
    for (let j = 0; j < 24; j++) {
      const idx = Math.floor((scrambleT * 14 + i*3.7 + j*1.1)) % chars.length;
      line += chars[Math.abs(idx) % chars.length];
    }
    lines.push(line);
  }
  return (
    <div style={{
      position:'absolute', left:x, top:y,
      transform:`translate(-50%,-50%)`,
      opacity, display:'flex', alignItems:'center', gap: 16,
    }}>
      {/* input label */}
      <div style={{textAlign:'right'}}>
        <div style={{fontFamily:TK.mono,fontSize:14,color:TK.ink3,letterSpacing:'.3em',textTransform:'uppercase',marginBottom:6}}>entrada</div>
        <div style={{fontFamily:TK.serifDisplay,fontStyle:'italic',fontSize:28,color:TK.ink}}>dados pessoais</div>
        <div style={{fontFamily:TK.serifBody,fontSize:16,color:TK.ink3,marginTop:4}}>CPF · histórico · cadastros</div>
      </div>
      {/* arrow */}
      <svg width="44" height="40"><path d="M0 20 L 36 20 M28 12 L 36 20 L 28 28" stroke={TK.ink} strokeWidth="2" fill="none"/></svg>
      {/* black box */}
      <div style={{
        width: width - 480, height,
        background: TK.ink,
        position: 'relative',
        boxShadow: 'inset 0 0 0 1px #000, 0 10px 30px rgba(0,0,0,.3)',
      }}>
        {/* hatching corner */}
        <svg style={{position:'absolute',inset:0,width:'100%',height:'100%'}}>
          <defs>
            <pattern id="bbhatch" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="6" stroke={TK.accent} strokeWidth=".5" opacity=".5"/>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#bbhatch)" opacity=".3"/>
        </svg>
        {/* corner label */}
        <div style={{position:'absolute',top:14,left:18,fontFamily:TK.mono,fontSize:13,color:'#5a5046',letterSpacing:'.3em',textTransform:'uppercase'}}>caixa-preta</div>
        {/* scrambling content */}
        <div style={{
          position:'absolute', inset:0,
          display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap: 8,
        }}>
          {lines.map((l, i) => (
            <div key={i} style={{
              fontFamily: TK.mono, fontSize: 30, color: TK.termErr,
              letterSpacing: '.08em', opacity: 0.85,
              filter: 'blur(.3px)',
            }}>{l}</div>
          ))}
        </div>
        {/* big "?" overlay */}
        <div style={{
          position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center',
          fontFamily: TK.serifDisplay, fontSize: 220, fontWeight: 700, color: TK.accent,
          opacity: 0.55, mixBlendMode:'screen',
        }}>?</div>
      </div>
      {/* arrow */}
      <svg width="44" height="40"><path d="M0 20 L 36 20 M28 12 L 36 20 L 28 28" stroke={TK.ink} strokeWidth="2" fill="none"/></svg>
      {/* output label */}
      <div style={{textAlign:'left'}}>
        <div style={{fontFamily:TK.mono,fontSize:14,color:TK.ink3,letterSpacing:'.3em',textTransform:'uppercase',marginBottom:6}}>saída</div>
        <div style={{fontFamily:TK.serifDisplay,fontStyle:'italic',fontSize:28,color:TK.accent}}>indeferido</div>
        <div style={{fontFamily:TK.serifBody,fontSize:16,color:TK.ink3,marginTop:4}}>sem motivação</div>
      </div>
    </div>
  );
}

Object.assign(window, {
  TK, PaperBg, Fleur, Rule, RevealText, Stamp, Folio, DropCap,
  ColumnGfx, JanusHead, PhoneFrame, BlackBox,
});
