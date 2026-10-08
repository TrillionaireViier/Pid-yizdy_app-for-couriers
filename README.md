# Під'їзди (Pid'yizdy) - 3D Micro-Navigation for Couriers

## High-Converting Landing Page Copy

### Hero Section
**Headline:** Знаходь потрібні двері наосліп. Навіть без GPS.
**Sub-headline:** Перший український 3D-навігатор для кур'єрів, який веде прямо до дверей квартири. Мікро-навігація по під'їздах, поверхах та глухим зонам за допомогою інерційних датчиків (Dead-Reckoning).
**CTA Buttons:** [Завантажити додаток] [API для бізнесу]

### Problem/Agitation (The "Pain" Section)
**Title:** Час — це гроші. А пошук під'їзду — це втрачений час.
- 📉 РЕБ кладе GPS? Звичайні карти безсилі.
- 🏢 ЖК-лабіринти з 20 під'їздами? Карти показують лише центр будинку.
- ⏳ Доставка холоне, поки ви шукаєте вхід з двору.

### Solution (The "Magic" Section)
**Title:** Від адреси — прямо до килимка клієнта.
- **Точна 3D-мапа будинків:** Усі входи, арки, під'їзди та схеми квартир. Ви точно знаєте, куди заходити.
- **Навігація без GPS (Dead-Reckoning):** Працює навіть при жорсткому РЕБ. Ваш смартфон використовує гіроскоп, акселерометр та крокомір, щоб рахувати кожен ваш крок від останньої відомої точки.
- **Офлайн-режим:** Карти ЖК та планування завантажуються в кеш на початку зміни.

### Social Proof / ROI
**Title:** Кур'єри заробляють на 30% більше.
"Раніше я витрачав по 10 хвилин на пошук потрібного під'їзду в ЖК 'Комфорт Таун'. З 'Під'їздами' я просто дивлюсь на стрілку, як у відеогрі." — *Максим, кур'єр Glovo*

### Final CTA
**Title:** Перестань блукати. Почни доставляти.
**CTA:** [Встановити безкоштовно] (Доступно в App Store та Google Play)

---

## Mobile UI Specs

### 1. General Aesthetic & Architecture
- **Theme:** High-contrast Dark Mode (optimized for OLED screens to save battery during long shifts). Accent color: Neon Yellow/Green (for max visibility outdoors).
- **Typography:** Large, bold, readable sans-serif (Inter or Roboto) — easy to read while walking or riding a bike.

### 2. Core Screens & Interactions

#### A. The Active Route Screen (The "Dashboard")
- **Top Bar:** 
  - Current Address (Big text: "Київська 14, Під'їзд 3, Кв. 85").
  - GPS Status Indicator: "🟢 GPS Active" or "⚠️ GPS Lost - Inertial Nav Active (Dead-reckoning)".
- **Center Canvas (3D/AR View):**
  - **Overhead 3D Mode:** A micro-map showing the building outline, fence gates, and highlighted entrance.
  - **AR Mode Toggle:** Uses camera + compass to show a big floating yellow arrow pointing to the specific entrance door.
- **Bottom Panel (Action Sheet):**
  - Floor & Door Code info (e.g., "Домофон: 38К, Поверх: 5").
  - "Прибув" (Arrived) Big Swipe-to-Complete button (prevents accidental taps).

#### B. Offline Dead-Reckoning Mode (Jamming State)
- **Trigger:** Auto-activates when location accuracy drops below 50m.
- **UI Changes:** The map dims slightly, and a grid appears. A pulse animation emits from the user's dot based on their steps (pedometer integration).
- **Instructions Overlay:** "GPS lost. Keep walking straight 20m, then turn right into the arch."

#### C. Smart Address Input
- **Search Bar:** Auto-completes not just streets, but specific residential complexes (ЖК).
- **Quick Selectors:** Fast numpad for `Будинок` (Building) -> `Під'їзд` (Entrance) -> `Квартира` (Apt).
- **Crowdsourced Notes:** A small section for courier notes ("Зла вівчарка", "Охоронець не пускає через центральний").

### 3. Technical Requirements for Dead-Reckoning
- Sensor Fusion utilizing iOS CoreMotion / Android SensorManager (Accelerometer + Gyroscope + Magnetometer).
- Step detection algorithm to calculate distance covered.
- Orientation tracking to determine heading when compass is jammed (using relative turns).
