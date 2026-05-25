// video-scenes.jsx — six scenes for "Do Poder-Dever ao Dever-Poder"
// Total 56s @ 1920x1080.

// SCENE TIMINGS
const SCENES = {
  frontispiece: { start: 0,  end: 9  },   //  9s
  janus:        { start: 9,  end: 18 },   //  9s
  columns:      { start: 18, end: 28 },   // 10s
  caso:         { start: 28, end: 41 },   // 13s
  conselho:     { start: 41, end: 49 },   //  8s
  manifesto:    { start: 49, end: 56 },   //  7s
};

// ─── SCENE 1 ── FRONTISPIECE ────────────────────────────────────────────
function SceneFrontispiece() {
  return (
    <Sprite start={SCENES.frontispiece.start} end={SCENES.frontispiece.end}>
      {({ localTime }) => (
        <>
          <PaperBg/>
          {/* Top + bottom ornamental borders */}
          <DoubleBorder/>
          {/* Top folio */}
          <Folio x={960} y={120} text="Universidade Federal de Santa Catarina · Programa de Pós-Graduação em Direito" size={14}/>
          <div style={{position:'absolute',left:'50%',top:170,transform:'translateX(-50%)',width:300,height:1,background:TK.ink,opacity:.4}}/>

          {/* Section number — illuminated */}
          <div style={{
            position:'absolute', left:'50%', top:230, transform:'translate(-50%,-50%)',
            fontFamily: TK.mono, fontSize: 16, color: TK.ink3,
            letterSpacing: '.5em', textTransform:'uppercase',
            opacity: clamp(localTime / 0.6, 0, 1),
          }}>Seminário · VIII</div>

          {/* Drop cap D (illuminated initial) */}
          <DropCap x={600} y={500} letter="D" size={420} color={TK.accent} startAt={0.4}/>

          {/* Title block */}
          <div style={{position:'absolute', left:880, top:340, width: 900,
            opacity: clamp((localTime - 0.4) / 0.4, 0, 1)}}>
            <div style={{fontFamily:TK.mono,fontSize:18,color:TK.ink3,letterSpacing:'.32em',textTransform:'uppercase',marginBottom:24}}>
              do poder-dever
            </div>
          </div>

          {/* Main display title */}
          <RevealText
            text="ao Dever-Poder."
            x={880} y={500}
            size={120} weight={500} italic={false}
            color={TK.ink} align="left"
            startAt={1.0} duration={1.4}
            tracking="-0.025em"
          />

          {/* Em accent */}
          <Stamp text="Administração Pública 4.0"
            x={1180} y={640} size={48} color={TK.accent}
            rotation={-3} startAt={2.6} duration={0.7}
          />

          {/* Authors band */}
          <div style={{
            position:'absolute', left:880, top:740,
            opacity: clamp((localTime - 3.4) / 0.6, 0, 1),
          }}>
            <div style={{width:120,height:1,background:TK.ink,marginBottom:14}}/>
            <div style={{fontFamily:TK.serifDisplay,fontSize:32,fontStyle:'italic',color:TK.ink}}>
              Ana Vitória Vanzin · Vinícius Oliveira
            </div>
            <div style={{fontFamily:TK.mono,fontSize:14,color:TK.ink3,letterSpacing:'.32em',textTransform:'uppercase',marginTop:10}}>
              ppgd · ufsc · mmxxvi · florianópolis
            </div>
          </div>

          {/* Decorative laurel image bottom-left */}
          <div style={{
            position:'absolute', left:200, top:780, width: 240,
            opacity: clamp((localTime - 4.0) / 0.8, 0, 1),
            transform: `translate(0, ${(1 - clamp((localTime-4)/.8,0,1)) * 12}px)`,
          }}>
            <img src="assets/img-laurel.png" alt="" style={{width:'100%',filter:'sepia(.2) contrast(1.05)'}}/>
          </div>

          {/* Latin epigraph fading in last */}
          <div style={{
            position:'absolute', left:'50%', top:960, transform:'translate(-50%, -50%)',
            textAlign:'center',
            opacity: clamp((localTime - 5.0) / 0.8, 0, 1) * clamp((9 - localTime - 0.3) / 0.6, 0, 1),
          }}>
            <div style={{fontFamily:TK.serifDisplay,fontStyle:'italic',fontSize:26,color:TK.ink2}}>
              «&nbsp;potestas non est sine officio&nbsp;»
            </div>
            <div style={{fontFamily:TK.mono,fontSize:12,color:TK.ink3,letterSpacing:'.4em',textTransform:'uppercase',marginTop:8}}>
              — não há poder sem dever
            </div>
          </div>

          {/* slow camera drift — gentle zoom in via ken-burns on whole scene via CSS */}
        </>
      )}
    </Sprite>
  );
}

function DoubleBorder() {
  return (
    <>
      <div style={{position:'absolute',left:120,right:120,top:80,height:1,background:TK.ink,opacity:.5}}/>
      <div style={{position:'absolute',left:120,right:120,top:84,height:1,background:TK.ink,opacity:.25}}/>
      <div style={{position:'absolute',left:120,right:120,bottom:80,height:1,background:TK.ink,opacity:.5}}/>
      <div style={{position:'absolute',left:120,right:120,bottom:84,height:1,background:TK.ink,opacity:.25}}/>
      {/* corners */}
      {[[120,80],[1800,80],[120,1000],[1800,1000]].map(([cx,cy],i) => (
        <Fleur key={i} x={cx} y={cy} size={24} color={TK.accent} rotation={i*90} opacity={.85}/>
      ))}
    </>
  );
}

// ─── SCENE 2 ── JANUS DUALITY ───────────────────────────────────────────
function SceneJanus() {
  const startAbs = SCENES.janus.start;
  return (
    <Sprite start={startAbs} end={SCENES.janus.end}>
      {({ localTime }) => {
        // alternate pulsing every 1.8s
        const phase = Math.floor((localTime - 2.5) / 1.5);
        const pulseSide = localTime < 2.5 ? 0 : (phase % 2 === 0 ? -1 : 1);

        return (
          <>
            <PaperBg tone={TK.paperWarm}/>
            <DoubleBorder/>

            {/* top section heading */}
            <Folio x={960} y={120} text="Parte I · O Estado, em duas posições simultâneas" size={14}/>

            {/* Pull-quote */}
            <div style={{
              position:'absolute', left:'50%', top: 240, transform:'translate(-50%,-50%)',
              textAlign:'center', maxWidth: 1500,
            }}>
              <RevealText
                text="O Poder Público aparece, no mesmo gesto,"
                x={960} y={0} size={48} weight={400} italic
                color={TK.ink} startAt={0.2} duration={1.2}
              />
              <div style={{height:60}}/>
              <RevealText
                text="em duas posições simultâneas."
                x={960} y={60} size={48} weight={400} italic
                color={TK.accent} startAt={1.0} duration={1.1}
              />
            </div>

            {/* Janus head, center */}
            <JanusHead x={960} y={620} size={260} startAt={2.2} pulseSide={pulseSide}/>

            {/* LEFT — protetor */}
            <div style={{
              position:'absolute', left: 220, top: 540,
              opacity: clamp((localTime - 3.2) / 0.6, 0, 1),
              transform: `translateX(${(1 - clamp((localTime-3.2)/.6,0,1)) * -30}px)`,
            }}>
              <div style={{fontFamily:TK.mono,fontSize:14,color:TK.ink3,letterSpacing:'.4em',textTransform:'uppercase',marginBottom:14}}>
                · face I — laurel ·
              </div>
              <div style={{fontFamily:TK.serifDisplay,fontSize:84,fontWeight:600,fontStyle:'italic',color:TK.ink,lineHeight:.96,letterSpacing:'-.02em'}}>
                Protetor
              </div>
              <div style={{width:120,height:1,background:TK.ink,marginTop:18,marginBottom:18}}/>
              <div style={{fontFamily:TK.serifBody,fontSize:22,color:TK.ink2,lineHeight:1.5,maxWidth: 360}}>
                Guarda a privacidade.<br/>
                Abre os arquivos. Promete<br/>
                explicar o que decide.
              </div>
            </div>

            {/* RIGHT — violador */}
            <div style={{
              position:'absolute', right: 220, top: 540, textAlign:'right',
              opacity: clamp((localTime - 4.0) / 0.6, 0, 1),
              transform: `translateX(${(1 - clamp((localTime-4)/.6,0,1)) * 30}px)`,
            }}>
              <div style={{fontFamily:TK.mono,fontSize:14,color:TK.accent2,letterSpacing:'.4em',textTransform:'uppercase',marginBottom:14}}>
                · face II — coroa ·
              </div>
              <div style={{fontFamily:TK.serifDisplay,fontSize:84,fontWeight:600,fontStyle:'italic',color:TK.accent,lineHeight:.96,letterSpacing:'-.02em'}}>
                Violador
              </div>
              <div style={{width:120,height:1,background:TK.accent,marginTop:18,marginBottom:18,marginLeft:'auto'}}/>
              <div style={{fontFamily:TK.serifBody,fontSize:22,color:TK.ink2,lineHeight:1.5,maxWidth: 360,marginLeft:'auto'}}>
                Coleta sem limite.<br/>
                Fecha quando lhe convém.<br/>
                Decide e não explica.
              </div>
            </div>

            {/* Bottom inscription */}
            <div style={{
              position:'absolute', left:'50%', top:1000, transform:'translate(-50%,-50%)',
              textAlign:'center',
              opacity: clamp((localTime - 5.5) / 0.8, 0, 1) * clamp((9 - localTime - 0.3) / 0.6, 0, 1),
            }}>
              <Rule x={960} y={-22} width={620} withFleur color={TK.ink}/>
              <div style={{fontFamily:TK.serifDisplay,fontStyle:'italic',fontSize:32,color:TK.ink}}>
                — e o mesmo Estado escreve as duas regras.
              </div>
            </div>
          </>
        );
      }}
    </Sprite>
  );
}

// ─── SCENE 3 ── FOUR COLUMNS (the articles) ────────────────────────────
function SceneColumns() {
  const startAbs = SCENES.columns.start;
  return (
    <Sprite start={startAbs} end={SCENES.columns.end}>
      {({ localTime }) => (
        <>
          <PaperBg/>
          <DoubleBorder/>

          <Folio x={960} y={120} text="Parte II · Quatro artigos · uma só arquitetura" size={14}/>

          {/* Big title */}
          <div style={{position:'absolute',left:'50%',top:240,transform:'translate(-50%,-50%)',textAlign:'center'}}>
            <RevealText
              text="Quatro Colunas"
              x={960} y={0} size={108} weight={500}
              color={TK.ink} startAt={0.1} duration={1.0}
              tracking="-.02em"
            />
            <div style={{height:130}}/>
            <Stamp
              text="da Administração Pública 4.0"
              x={960} y={-50} size={36} color={TK.accent}
              rotation={-2} italic
              startAt={1.2} duration={0.7}
            />
          </div>

          {/* Four columns */}
          <ColumnGfx x={360} y={460} height={340} width={70}
            label={`Salgado\n& Saito`}
            sublabel="art. i · privacidade"
            startAt={2.2}
          />
          <ColumnGfx x={760} y={460} height={340} width={70}
            label={`Cristóvam\n& Hahn`}
            sublabel="art. ii · governo aberto"
            startAt={2.7}
          />
          <ColumnGfx x={1160} y={460} height={340} width={70}
            label={`Sarlet\n& Molinaro`}
            sublabel="art. iii · big data saúde"
            startAt={3.2}
          />
          <ColumnGfx x={1560} y={460} height={340} width={70}
            label={`Vanzin\n& Oliveira`}
            sublabel="art. iv · nossa síntese"
            accent={TK.gold}
            startAt={3.7}
          />

          {/* Bottom legend with cards */}
          <div style={{position:'absolute',bottom:160,left:0,right:0,display:'flex',justifyContent:'center',gap:60,
            opacity: clamp((localTime - 5.0) / 0.8, 0, 1),
          }}>
            {[
              ['proteção','de dados pessoais'],
              ['abertura','dos dados estatais'],
              ['explicabilidade','das decisões automatizadas'],
              ['contraditório','algorítmico'],
            ].map(([a,b],i) => (
              <div key={i} style={{textAlign:'center',width:280,
                opacity: clamp((localTime - 5.0 - i*0.2) / 0.5, 0, 1),
                transform: `translateY(${(1 - clamp((localTime-5-i*.2)/.5,0,1)) * 12}px)`,
              }}>
                <div style={{fontFamily:TK.serifDisplay,fontSize:30,fontWeight:600,fontStyle:'italic',color:TK.ink}}>{a}</div>
                <div style={{fontFamily:TK.serifBody,fontSize:18,color:TK.ink3,marginTop:4}}>{b}</div>
              </div>
            ))}
          </div>

          {/* hairline */}
          <div style={{position:'absolute',left:960,top:980,transform:'translate(-50%,-50%)',
            opacity: clamp((localTime - 6) / 0.6, 0, 1)}}>
            <Rule x={0} y={0} width={400} withFleur color={TK.ink}/>
          </div>
        </>
      )}
    </Sprite>
  );
}

// ─── SCENE 4 ── O CASO (phone + black box) ─────────────────────────────
function SceneCaso() {
  const startAbs = SCENES.caso.start;
  return (
    <Sprite start={startAbs} end={SCENES.caso.end}>
      {({ localTime }) => {
        const phase = localTime < 6.5 ? 0 : 1; // 0: phone close-up; 1: zoom out to black box

        return (
          <>
            <PaperBg tone={TK.paperDark}/>

            {/* establishing text */}
            <div style={{
              position:'absolute', left:'50%', top: 160, transform:'translate(-50%,-50%)',
              textAlign:'center',
              opacity: clamp(localTime / 0.6, 0, 1) * clamp((4.5 - localTime) / 0.6, 0, 1),
            }}>
              <div style={{fontFamily:TK.mono,fontSize:14,color:TK.ink3,letterSpacing:'.4em',textTransform:'uppercase',marginBottom:10}}>
                · caso · INSS · 2024 ·
              </div>
              <div style={{fontFamily:TK.serifDisplay,fontStyle:'italic',fontSize:48,color:TK.ink,lineHeight:1.1}}>
                A trabalhadora rural <span style={{color:TK.accent}}>recebe</span> isto.
              </div>
            </div>

            {/* Phone */}
            <PhoneFrame
              x={phase === 0 ? 960 : 360}
              y={phase === 0 ? 600 : 600}
              scale={phase === 0 ? 1 : 0.55}
              startAt={0.5}
              screenContent={<PhoneScreen localTime={localTime}/>}
            />

            {/* Black box appears in phase 1 */}
            {phase === 1 && (
              <Sprite start={6.5 + startAbs} end={SCENES.caso.end}>
                {({ localTime: bt }) => (
                  <>
                    <div style={{
                      position:'absolute', left:'50%', top: 220, transform:'translate(-50%,-50%)',
                      textAlign:'center',
                      opacity: clamp(bt / 0.6, 0, 1),
                    }}>
                      <div style={{fontFamily:TK.serifDisplay,fontStyle:'italic',fontSize:56,color:TK.ink}}>
                        Os dados entram. A decisão sai.
                      </div>
                      <Stamp
                        text="Tudo no meio está oculto."
                        x={0} y={70} size={56} color={TK.accent}
                        rotation={-1.5} startAt={0.4} duration={0.6}
                      />
                    </div>
                    {/* Black box, anchored center-right of phone */}
                    <BlackBox x={1180} y={600} width={1400} height={340} startAt={0.6}/>

                    {/* trailing legend */}
                    <div style={{
                      position:'absolute', left:'50%', top:920, transform:'translate(-50%,-50%)',
                      textAlign:'center',
                      opacity: clamp((bt - 2.5) / 0.6, 0, 1) * clamp((6.5 - bt - 0.3) / 0.6, 0, 1),
                    }}>
                      <div style={{fontFamily:TK.mono,fontSize:14,color:TK.ink3,letterSpacing:'.4em',textTransform:'uppercase',marginBottom:8}}>
                        art. 20, lgpd · violado em silêncio
                      </div>
                      <div style={{fontFamily:TK.serifBody,fontSize:22,color:TK.ink2,fontStyle:'italic'}}>
                        Sem contraditório prévio. Sem motivação adequada. Sem revisão por humano.
                      </div>
                    </div>
                  </>
                )}
              </Sprite>
            )}
          </>
        );
      }}
    </Sprite>
  );
}

// Phone-screen content — denial card
function PhoneScreen({ localTime }) {
  const t = localTime - 1.2;
  const stampShow = t > 1.8;
  return (
    <div style={{position:'absolute',inset:0,paddingTop:80,paddingLeft:24,paddingRight:24,fontFamily:TK.serifBody}}>
      {/* top header */}
      <div style={{
        display:'flex',alignItems:'center',gap:10,
        opacity: clamp(t / 0.4, 0, 1),
        paddingBottom:12,borderBottom:`1px solid ${TK.rule}`,
      }}>
        <div style={{width:32,height:32,background:'#0a5d2f',borderRadius:6,display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontSize:12,fontWeight:700,fontFamily:TK.mono}}>m</div>
        <div>
          <div style={{fontSize:14,fontWeight:700,color:TK.ink}}>Meu INSS</div>
          <div style={{fontSize:11,color:TK.ink3,fontFamily:TK.mono}}>27 mar · 14:08</div>
        </div>
      </div>

      <div style={{marginTop:24,opacity: clamp((t-.4)/.4,0,1)}}>
        {/* pill */}
        <div style={{
          display:'inline-block',padding:'5px 14px',
          background:TK.accent,color:'#fff',fontSize:11,fontWeight:700,
          fontFamily:TK.mono,letterSpacing:'.18em',textTransform:'uppercase',
          borderRadius: 4, marginBottom: 14,
        }}>indeferido</div>

        <div style={{fontFamily:TK.serifDisplay,fontSize:22,fontWeight:600,color:TK.ink,lineHeight:1.15,marginBottom:8}}>
          Aposentadoria por<br/>idade rural
        </div>
        <div style={{fontFamily:TK.mono,fontSize:10,color:TK.ink3,letterSpacing:'.18em',marginBottom:20}}>
          PROTOCOLO · NB 2026.XXX.XXXXX-X
        </div>

        <div style={{fontFamily:TK.serifBody,fontSize:14,color:TK.ink2,lineHeight:1.4,marginBottom:18}}>
          Conforme análise <span style={{fontStyle:'italic'}}>do sistema automatizado</span>, seu pedido não preenche os requisitos.
        </div>

        <div style={{
          padding:14,background:TK.paperWarm,borderLeft:`3px solid ${TK.accent}`,
          fontFamily:TK.mono,fontSize:11,color:TK.ink2,lineHeight:1.5,
        }}>
          motivo: ▓▓▓▓▓▓ ▓▓▓▓<br/>
          base legal: ▓▓▓▓▓▓ ▓▓ ▓▓<br/>
          revisor humano: <span style={{color:TK.accent}}>—</span>
        </div>
      </div>

      {/* INDEFERIDO stamp */}
      {stampShow && (
        <div style={{
          position:'absolute', left:'50%', top:'56%',
          transform:`translate(-50%,-50%) rotate(-14deg) scale(${0.7 + Easing.easeOutBack(clamp((t-1.8)/.5,0,1)) * 0.5})`,
          fontFamily:TK.serifDisplay, fontSize: 78, fontWeight:800, fontStyle:'italic',
          color: TK.accent, letterSpacing:'.05em',
          opacity: clamp((t-1.8) / .3, 0, 1) * 0.88,
          border:`5px solid ${TK.accent}`, padding:'6px 18px',
          textShadow:'0 0 1px rgba(139,26,26,.5)',
          mixBlendMode:'multiply',
        }}>INDEFERIDO</div>
      )}
    </div>
  );
}

// ─── SCENE 5 ── CONSELHO (terminal) ────────────────────────────────────
function SceneConselho() {
  const startAbs = SCENES.conselho.start;
  return (
    <Sprite start={startAbs} end={SCENES.conselho.end}>
      {({ localTime }) => (
        <>
          <PaperBg dark/>
          {/* scan lines */}
          <div style={{position:'absolute',inset:0,
            background:'repeating-linear-gradient(0deg, rgba(63,224,160,.04) 0 2px, transparent 2px 4px)',
            pointerEvents:'none',
          }}/>

          {/* CRT vignette */}
          <div style={{position:'absolute',inset:0,
            background:'radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(0,0,0,.5) 100%)',
            pointerEvents:'none',
          }}/>

          {/* terminal frame top */}
          <div style={{position:'absolute',top:80,left:120,right:120,
            display:'flex',alignItems:'center',gap:14,
            fontFamily:TK.mono, fontSize:14, color: TK.termDim, letterSpacing:'.2em',
            opacity: clamp(localTime / 0.4, 0, 1),
          }}>
            <div style={{display:'flex',gap:8}}>
              <div style={{width:10,height:10,borderRadius:5,background:'#f08070'}}/>
              <div style={{width:10,height:10,borderRadius:5,background:'#f5b961'}}/>
              <div style={{width:10,height:10,borderRadius:5,background:'#3fe0a0'}}/>
            </div>
            <div>conselho · de · contestação · algorítmica</div>
            <div style={{flex:1}}/>
            <div>v0.1.0-beta · localhost · :3000</div>
          </div>

          {/* prompt lines */}
          <div style={{position:'absolute',top:200,left:160,right:160,fontFamily:TK.mono,fontSize:24,color:TK.termText,lineHeight:1.7}}>
            <TerminalLine startAt={0.6} text="$ ./conselho --case=INSS-2026.XXX --layers=4 --advocate-the-citizen" color={TK.termNeon2}/>
            <TerminalLine startAt={1.6} text="› carregando caso.INSS …" color={TK.termDim}/>
            <TerminalLine startAt={2.0} text="› quatro vozes convergem para a trabalhadora:" color={TK.termText}/>
          </div>

          {/* Big tagline */}
          <div style={{position:'absolute',left:'50%',top:480,transform:'translate(-50%,-50%)',
            textAlign:'center',
            opacity: clamp((localTime - 2.6) / 0.5, 0, 1),
          }}>
            <div style={{fontFamily:TK.serifDisplay,fontStyle:'italic',fontSize:84,fontWeight:500,color:TK.termText,letterSpacing:'-.02em',lineHeight:1.05}}>
              <span style={{color:TK.termNeon}}>Devolver à pessoa</span> o<br/>contraditório que o Estado <span style={{color:TK.termErr}}>suprimiu</span>.
            </div>
          </div>

          {/* 4 advocate cards */}
          <div style={{position:'absolute',bottom:170,left:160,right:160,display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:24}}>
            {[
              ['LGPD','art. 20 §1', 'proteção',      0.6],
              ['LAI', 'art. 5',     'abertura',      0.85],
              ['Saúde', 'art. 196', 'explicabilidade', 1.1],
              ['CF', 'art. 5, lv',  'contraditório', 1.35],
            ].map(([lex,art,role,delay],i) => {
              const t = clamp((localTime - 3.0 - delay) / 0.5, 0, 1);
              const eased = Easing.easeOutBack(t);
              return (
                <div key={i} style={{
                  border:`1px solid ${TK.termLine}`,
                  background:'rgba(15,28,28,.6)',
                  padding:'20px 22px',
                  opacity: t,
                  transform:`translateY(${(1-eased)*20}px)`,
                  position:'relative',
                }}>
                  {/* terminal-style corner */}
                  <div style={{position:'absolute',top:-1,left:-1,width:14,height:14,borderTop:`2px solid ${TK.termNeon}`,borderLeft:`2px solid ${TK.termNeon}`}}/>
                  <div style={{position:'absolute',bottom:-1,right:-1,width:14,height:14,borderBottom:`2px solid ${TK.termNeon}`,borderRight:`2px solid ${TK.termNeon}`}}/>
                  <div style={{fontFamily:TK.mono,fontSize:12,color:TK.termDim,letterSpacing:'.32em',textTransform:'uppercase',marginBottom:8}}>perspectiva · {String(i+1).padStart(2,'0')}</div>
                  <div style={{fontFamily:TK.serifDisplay,fontStyle:'italic',fontSize:46,fontWeight:600,color:TK.termNeon,lineHeight:1}}>{lex}</div>
                  <div style={{fontFamily:TK.mono,fontSize:13,color:TK.termCit,marginTop:8}}>{art}</div>
                  <div style={{fontFamily:TK.serifBody,fontSize:18,color:TK.termText,marginTop:14,fontStyle:'italic'}}>{role}</div>
                </div>
              );
            })}
          </div>

          {/* bottom blinking cursor */}
          <div style={{position:'absolute',bottom:90,left:160,fontFamily:TK.mono,fontSize:16,color:TK.termDim,
            opacity: clamp((localTime - 4.5) / 0.4, 0, 1),
          }}>
            <span style={{color:TK.termNeon2}}>conselho ▸ </span>aguardando contestação<span style={{
              display:'inline-block',width:10,height:18,background:TK.termNeon,marginLeft:6,verticalAlign:'-2px',
              opacity: Math.floor(localTime*3)%2 ? 1 : 0.1,
            }}/>
          </div>
        </>
      )}
    </Sprite>
  );
}

function TerminalLine({ startAt, text, color }) {
  const { localTime } = useSprite();
  const t = clamp((localTime - startAt) / Math.max(0.4, text.length * 0.018), 0, 1);
  const shown = text.slice(0, Math.floor(t * text.length));
  return (
    <div style={{opacity: clamp((localTime - startAt) / 0.2, 0, 1), color, whiteSpace:'pre'}}>
      {shown}
      {t < 1 && <span style={{display:'inline-block',width:8,height:14,background:'currentColor',verticalAlign:'-2px',marginLeft:2,opacity:Math.floor(localTime*5)%2?1:.2}}/>}
    </div>
  );
}

// ─── SCENE 6 ── MANIFESTO FINAL ────────────────────────────────────────
function SceneManifesto() {
  const startAbs = SCENES.manifesto.start;
  return (
    <Sprite start={startAbs} end={SCENES.manifesto.end}>
      {({ localTime }) => (
        <>
          <PaperBg/>
          <DoubleBorder/>

          <Folio x={960} y={120} text="— in fine —" size={14}/>

          <div style={{position:'absolute',left:'50%',top:260,transform:'translate(-50%,-50%)',textAlign:'center',width:1500}}>
            <RevealText
              text="Não há Administração Pública 4.0"
              x={750} y={0} size={68} weight={400}
              color={TK.ink} startAt={0.2} duration={1.4}
            />
            <div style={{height:90}}/>
            <div style={{fontFamily:TK.serifDisplay,fontSize:96,fontWeight:600,fontStyle:'italic',color:TK.accent,lineHeight:1,letterSpacing:'-.02em',
              opacity: clamp((localTime - 1.4) / 0.6, 0, 1),
              transform: `scale(${0.85 + Easing.easeOutBack(clamp((localTime-1.4)/.6,0,1)) * 0.15})`,
            }}>
              democrática
            </div>
            <div style={{height:36}}/>
            <div style={{fontFamily:TK.serifDisplay,fontSize:48,fontStyle:'italic',color:TK.ink,
              opacity: clamp((localTime - 2.0) / 0.6, 0, 1),
            }}>
              sem quatro colunas.
            </div>
          </div>

          {/* Four engraved pillars — names appear stamping */}
          <div style={{position:'absolute',bottom:240,left:0,right:0,
            display:'flex',justifyContent:'center',gap:60,
          }}>
            {[
              ['I',   'proteção'],
              ['II',  'abertura'],
              ['III', 'explicabilidade'],
              ['IV',  'contraditório'],
            ].map(([numeral, word], i) => {
              const delay = 3.0 + i * 0.25;
              const t = clamp((localTime - delay) / 0.6, 0, 1);
              const eased = Easing.easeOutBack(t);
              return (
                <div key={i} style={{
                  width: 320, textAlign: 'center',
                  opacity: t,
                  transform: `translateY(${(1-eased)*16}px)`,
                }}>
                  <div style={{
                    width: 60, height: 60, margin: '0 auto 16px',
                    border: `2px solid ${TK.ink}`,
                    display:'flex',alignItems:'center',justifyContent:'center',
                    fontFamily: TK.serifDisplay, fontSize: 28, fontWeight: 600,
                    color: TK.ink, letterSpacing: '.05em',
                  }}>{numeral}</div>
                  <div style={{
                    fontFamily: TK.serifDisplay, fontSize: 42, fontWeight: 600, fontStyle:'italic',
                    color: TK.accent, letterSpacing: '-.01em',
                  }}>{word}</div>
                </div>
              );
            })}
          </div>

          {/* Final laurel + signature */}
          <div style={{
            position:'absolute', left:'50%', bottom: 130, transform:'translateX(-50%)',
            textAlign:'center',
            opacity: clamp((localTime - 4.6) / 0.6, 0, 1),
          }}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:24,marginBottom:18}}>
              <div style={{width:60,height:1,background:TK.ink}}/>
              <svg width="32" height="32" viewBox="0 0 40 40">
                <path d="M20 4 C 22 12, 28 14, 36 16 C 28 18, 22 20, 20 28 C 18 20, 12 18, 4 16 C 12 14, 18 12, 20 4 Z" fill={TK.accent}/>
              </svg>
              <div style={{width:60,height:1,background:TK.ink}}/>
            </div>
            <div style={{fontFamily:TK.serifDisplay,fontSize:22,fontStyle:'italic',color:TK.ink3,letterSpacing:'.01em'}}>
              Ana Vitória Vanzin &nbsp;·&nbsp; Vinícius Oliveira &nbsp;·&nbsp; mmxxvi
            </div>
            <div style={{fontFamily:TK.mono,fontSize:11,color:TK.ink3,letterSpacing:'.5em',textTransform:'uppercase',marginTop:10}}>
              finis
            </div>
          </div>
        </>
      )}
    </Sprite>
  );
}

// ─── Timestamp label hook ──────────────────────────────────────────────
function useTimestampLabel() {
  const time = useTime();
  React.useEffect(() => {
    const sec = Math.floor(time);
    const root = document.querySelector('#video-root');
    if (root) {
      const m = String(Math.floor(sec/60)).padStart(2,'0');
      const s = String(sec%60).padStart(2,'0');
      root.setAttribute('data-screen-label', `t=${m}:${s}`);
    }
  }, [Math.floor(time)]);
  return null;
}

// ─── Master timeline component ─────────────────────────────────────────
function Video() {
  return (
    <>
      <SceneFrontispiece/>
      <SceneJanus/>
      <SceneColumns/>
      <SceneCaso/>
      <SceneConselho/>
      <SceneManifesto/>
      <TimestampLabel/>
      <FilmGrain/>
      <SceneChapterTag/>
    </>
  );
}

function TimestampLabel() { useTimestampLabel(); return null; }

// subtle constant film grain to unify the whole video
function FilmGrain() {
  return (
    <svg style={{position:'absolute',inset:0,width:'100%',height:'100%',opacity:.12,mixBlendMode:'overlay',pointerEvents:'none'}}>
      <filter id="grainGlobal">
        <feTurbulence baseFrequency="1.5" numOctaves="1" seed="9"/>
        <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"/>
      </filter>
      <rect width="100%" height="100%" filter="url(#grainGlobal)"/>
    </svg>
  );
}

// chapter / scene tag bottom-left, like a film slate
function SceneChapterTag() {
  const time = useTime();
  let chap = null;
  for (const [name, {start, end}] of Object.entries(SCENES)) {
    if (time >= start && time < end) chap = name;
  }
  if (!chap) return null;
  const labels = {
    frontispiece: { num: 'I',   title: 'Frontispício' },
    janus:        { num: 'II',  title: 'Janus' },
    columns:      { num: 'III', title: 'As Quatro Colunas' },
    caso:         { num: 'IV',  title: 'O Caso' },
    conselho:     { num: 'V',   title: 'O Conselho' },
    manifesto:    { num: 'VI',  title: 'Manifesto' },
  };
  const L = labels[chap];
  // detect dark scene
  const isDark = chap === 'conselho';
  return (
    <div style={{
      position:'absolute', left: 60, bottom: 40,
      display:'flex', alignItems:'center', gap: 14,
      fontFamily: TK.mono, fontSize: 13,
      color: isDark ? TK.termDim : TK.ink3,
      letterSpacing: '.32em', textTransform: 'uppercase',
      opacity: .8, pointerEvents: 'none',
    }}>
      <div style={{
        padding: '4px 10px',
        border: `1px solid ${isDark ? TK.termDim : TK.ink3}`,
      }}>cap · {L.num}</div>
      <div>{L.title}</div>
    </div>
  );
}

Object.assign(window, { SCENES, Video, SceneFrontispiece, SceneJanus, SceneColumns, SceneCaso, SceneConselho, SceneManifesto });
