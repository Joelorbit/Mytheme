<script lang="ts">
  /* EYÜ GLYPH PACK
     Technical line style: 24×24 grid, stroke = currentColor, square caps,
     miter joins, consistent 1.5 weight. Geometry honors free sources
     (Lucide ISC / Feather MIT) restyled to the eyü voice. */

  export type IconName =
    | 'activity'
    | 'arrow-down'
    | 'arrow-left'
    | 'arrow-right'
    | 'arrow-up'
    | 'arrow-up-right'
    | 'book'
    | 'calendar'
    | 'card'
    | 'check'
    | 'chevron-down'
    | 'chevron-left'
    | 'chevron-right'
    | 'chevron-up'
    | 'chip'
    | 'clock'
    | 'code'
    | 'command'
    | 'copy'
    | 'cube'
    | 'download'
    | 'eye'
    | 'file'
    | 'folder'
    | 'github'
    | 'globe'
    | 'heart'
    | 'layers'
    | 'link'
    | 'linkedin'
    | 'mail'
    | 'map-pin'
    | 'menu'
    | 'minus'
    | 'moon-star'
    | 'orbit'
    | 'plus'
    | 'search'
    | 'send'
    | 'shield'
    | 'signal'
    | 'sparkles'
    | 'sun'
    | 'terminal'
    | 'triangle'
    | 'upload'
    | 'user'
    | 'x'
    | 'zap';

  const glyphs: Record<IconName, string> = {
    activity: '<path d="M3 20h4l2-7 4 14 2-7h6"/>',
    'arrow-down': '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
    'arrow-left': '<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
    'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    'arrow-up': '<path d="M12 19V5"/><path d="m5 12 7-7 7 7"/>',
    'arrow-up-right': '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>',
    book: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>',
    calendar:
      '<rect x="3" y="4" width="18" height="17" rx="2.5"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
    card: '<rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    'chevron-down': '<path d="m6 9 6 6 6-6"/>',
    'chevron-left': '<path d="m15 18-6-6 6-6"/>',
    'chevron-right': '<path d="m9 18 6-6-6-6"/>',
    'chevron-up': '<path d="m18 15-6-6-6 6"/>',
    chip:
      '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v3"/><path d="M15 2v3"/><path d="M9 19v3"/><path d="M15 19v3"/><path d="M2 9h3"/><path d="M2 15h3"/><path d="M19 9h3"/><path d="M19 15h3"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    code: '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
    command: '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3Z"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    cube: '<path d="m21 16-8.5 4.4a2 2 0 0 1-1.8 0L3 16"/><path d="m21 8-8.5-4.4a2 2 0 0 0-1.8 0L3 8"/><path d="m2 8.5 10 5 10-5"/><path d="M2 8.5v7l10 5V13"/><path d="M22 8.5v7L12 20.5"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    eye: '<path d="M2.5 12S5.5 5.5 12 5.5 21.5 12 21.5 12 18.5 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>',
    folder:
      '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
    github:
      '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 .8 6-0.5 6-2.8 0-1-.5-2-1.3-2.7 0-1.3-.3-2.4-.5-3.5-1.3 0-2.6.7-3.3 1.4a11.8 11.8 0 0 0-5.8 0C8.4 3.7 7 3 5.8 3c-.2 1.1-.5 2.2-.5 3.5A3.9 3.9 0 0 0 4 9.2C3.4 9.8 3 10.6 3 11.7c0 2.3 2.8 3.6 5.8 2.8A4.8 4.8 0 0 0 9 18v4"/>',
    globe:
      '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 4 9 14 14 0 0 1-4 9 14 14 0 0 1-4-9 14 14 0 0 1 4-9Z"/>',
    heart:
      '<path d="M19 14c1.2-1.2 2-2.9 2-4.5 0-2.8-2.2-5-5-5-1.2 0-2.4.4-3.3 1.2L12 6.7l-4.2-3.6A4.5 4.5 0 0 0 5 3C1.8 3 0 5.4 0 7.5 0 9 1 11 2 12l7 9Z"/>',
    layers:
      '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m12 17 9 5-9-5-9 5 9-5Z"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
    linkedin:
      '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.5c.9-1.4 2.5-2 4-1.5Z"/><rect x="2" y="9" width="4" height="12" rx="1"/><circle cx="4" cy="4" r="2"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="3"/><path d="m22 7-10 6L2 7"/>',
    'map-pin': '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/>',
    menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
    minus: '<path d="M5 12h14"/>',
    'moon-star':
      '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/><path d="M19 3v4"/><path d="M21 5h-4"/>',
    orbit: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/>',
    plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    shield: '<path d="M12 22s8-3 8-10V5l-8-3-8 3v7c0 7 8 10 8 10Z"/>',
    signal: '<path d="M3 20h18"/><path d="M5 20v-4"/><path d="M9 20v-8"/><path d="M13 20V8"/><path d="M17 20v-6"/>',
    sparkles: '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/><path d="M5 3v3"/><path d="M3.5 4.5h3"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    terminal: '<rect x="2" y="3" width="20" height="18" rx="3"/><path d="m7 8 3 4-3 4"/><path d="M12 16h5"/>',
    triangle: '<path d="M12 3 22 20H2Z"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>',
    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/>',
  };

  let {
    name,
    size = 20,
    strokeWidth = 1.5,
  }: { name: IconName; size?: number; strokeWidth?: number } = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width={size}
  height={size}
  fill="none"
  stroke="currentColor"
  stroke-width={strokeWidth}
  stroke-linecap="square"
  stroke-linejoin="miter"
  aria-hidden="true"
  focusable="false"
>
  {@html glyphs[name]}
</svg>