'use client';
import { useState } from 'react';

export default function TimelineItem({ item, index }) {
  const [open, setOpen] = useState(index === 0);

  const ACCENTS = ['#B0BEC5', '#90A4AE', '#ff6b35'];
  const accent  = ACCENTS[index % 3];

  return (
    <div className="reveal" style={{ transitionDelay: `${index * 0.08}s` }}>
      <div style={{
        display: 'flex',
        gap:     '24px',
        position: 'relative',
      }}>
        {/* Timeline dot + line */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
          <div style={{
            width:        '44px',
            height:       '44px',
            borderRadius: '50%',
            border:       `2px solid ${accent}`,
            background:   `${accent}12`,
            display:      'flex',
            alignItems:   'center',
            justifyContent: 'center',
            boxShadow:    `0 0 20px ${accent}30`,
            flexShrink:   0,
            zIndex:       1,
          }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: accent }} />
          </div>
          <div style={{
            flex:        1,
            width:       '2px',
            background:  'linear-gradient(to bottom, rgba(255,255,255,0.07), transparent)',
            minHeight:   '40px',
            marginTop:   '4px',
          }} />
        </div>

        {/* Card */}
        <div className="glass-card" style={{
          flex:         1,
          padding:      '24px 28px',
          marginBottom: '16px',
          cursor:       'pointer',
          borderColor:  open ? `${accent}35` : undefined,
        }} onClick={() => setOpen(v => !v)}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
            <div>
              <div style={{
                fontSize:   '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color:      accent,
                marginBottom: '4px',
              }}>{item.company}</div>
              <h3 style={{
                fontSize:   'clamp(0.95rem, 1.5vw, 1.05rem)',
                fontWeight: 700,
                color:      '#f0f0f0',
                lineHeight: 1.35,
                marginBottom: '6px',
              }}>{item.role}</h3>
              <div style={{ fontSize: '0.78rem', color: '#555', fontWeight: 500 }}>{item.period}</div>
            </div>
            <div style={{
              width:       '28px',
              height:      '28px',
              borderRadius: '50%',
              border:      '1px solid rgba(255,255,255,0.12)',
              display:     'flex',
              alignItems:  'center',
              justifyContent: 'center',
              color:       '#777',
              fontSize:    '0.7rem',
              flexShrink:  0,
              transition:  'transform 0.3s ease',
              transform:   open ? 'rotate(180deg)' : 'none',
            }}>▼</div>
          </div>

          {/* Expanded */}
          <div style={{
            maxHeight:  open ? '800px' : 0,
            overflow:   'hidden',
            transition: 'max-height 0.4s ease',
          }}>
            <div style={{ paddingTop: '18px', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '16px' }}>
              <p style={{ fontSize: '0.88rem', color: '#888', lineHeight: 1.75, marginBottom: '16px' }}>
                {item.description}
              </p>

              {item.achievements.length > 0 && (
                <ul style={{ margin: '0 0 16px 0', padding: 0, listStyle: 'none' }}>
                  {item.achievements.map((a, i) => (
                    <li key={i} style={{
                      display:      'flex',
                      gap:          '10px',
                      padding:      '5px 0',
                      fontSize:     '0.84rem',
                      color:        '#aaa',
                      lineHeight:   1.6,
                    }}>
                      <span style={{ color: accent, flexShrink: 0, marginTop: '1px' }}>▸</span>
                      {a}
                    </li>
                  ))}
                </ul>
              )}

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {item.tags.map(tag => (
                  <span key={tag} className="tag" style={{ borderColor: `${accent}30`, color: accent + 'cc' }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
