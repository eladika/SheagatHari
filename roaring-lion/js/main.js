// ===== DATA =====
const WIZARD_TREE = {
  start: {
    question: "מה קרה לך?",
    options: [
      { text: "נפגעתי פיזית", icon: "🤕", next: "injury_type" },
      { text: "הבית / הנכס שלי ניזוק", icon: "🏠", next: "property_type" },
      { text: "הרכב שלי ניזוק", icon: "🚗", next: "vehicle" },
      { text: "יש לי בעיות בעבודה", icon: "💼", next: "work_type" },
      { text: "עסק שלי נפגע", icon: "🏪", next: "business" },
      { text: "נזק נפשי / חרדה", icon: "🧠", next: "mental" }
    ]
  },
  injury_type: {
    question: "מה סוג הפגיעה?",
    options: [
      { text: "נפצעתי מרסיסים / פגז", icon: "💥", next: "result_injury_shrapnel" },
      { text: "נפגעתי בריצה למרחב מוגן", icon: "🏃", next: "result_injury_shelter" },
      { text: "גל הדף / לחץ", icon: "💨", next: "result_injury_blast" },
      { text: "חרדה חריפה / התקף פאניקה", icon: "😰", next: "result_mental_acute" }
    ]
  },
  property_type: {
    question: "מה נפגע?",
    options: [
      { text: "פגיעה ישירה / שריפה", icon: "🔥", next: "result_property_direct" },
      { text: "נזק מגל הדף (שמשות, קירות)", icon: "🪟", next: "result_property_blast" },
      { text: "דירה שכורה", icon: "🏢", next: "result_property_rented" },
      { text: "ציוד אישי בדירה", icon: "📦", next: "result_property_contents" }
    ]
  },
  vehicle: {
    question: "מה קרה לרכב?",
    options: [
      { text: "נפגע / נשרף / רסיסים", icon: "🔥", next: "result_vehicle_damaged" },
      { text: "תאונה בגלל ריצה למרחב מוגן", icon: "💥", next: "result_vehicle_accident" }
    ]
  },
  work_type: {
    question: "מה הבעיה בעבודה?",
    options: [
      { text: "לא יכול להגיע לעבודה", icon: "🚫", next: "result_work_absence" },
      { text: "פוטרתי / חל\"ת בגלל המלחמה", icon: "📋", next: "result_work_fired" },
      { text: "המעסיק לא משלם", icon: "💰", next: "result_work_unpaid" }
    ]
  },
  business: {
    question: null,
    result: "business"
  },
  mental: {
    question: null,
    result: "mental"
  }
};

const WIZARD_RESULTS = {
  result_injury_shrapnel: {
    icon: "🚨",
    title: "פגיעת רסיסים / פגז",
    subtitle: "זכאי לפיצויים מביטוח לאומי כנפגע פעולת איבה",
    urgency: "danger",
    steps: [
      { title: "פנה לחדר מיון מיד", desc: "קבל אישור רפואי המציין במפורש שמדובר בפגיעת פעולת איבה. שמור את כל המסמכים." },
      { title: "הגש תביעה לביטוח לאומי", desc: "תביעה כ'נפגע פעולות איבה' - מזכה בטיפול רפואי, דמי מחלה ופיצויים. יש לך 12 חודשים." },
      { title: "תעד את הפציעה", desc: "צלם את הפציעה, שמור חשבוניות רפואיות, ורשום בדיוק מה קרה, מתי ואיפה." },
      { title: "שכור עו\"ד נזקי גוף", desc: "בתביעות נזקי גוף כדאי לעבוד עם עו\"ד המתמחה בתביעות נגד המדינה." }
    ],
    contacts: [
      { name: "ביטוח לאומי", phone: "*6050" },
      { name: "מד\"א חירום", phone: "101" }
    ]
  },
  result_injury_shelter: {
    icon: "🏃",
    title: "פגיעה בריצה למרחב מוגן",
    subtitle: "ייתכן ותוכר כנפגע פעולת איבה - תלוי בנסיבות",
    urgency: "warning",
    steps: [
      { title: "פנה לקבלת טיפול רפואי", desc: "קבל תיעוד רפואי המציין שהפציעה נגרמה כתוצאה ישירה מהתרעת אזעקה." },
      { title: "הגש תביעה לביטוח לאומי", desc: "ביטוח לאומי מכיר בחלק מהמקרים האלו. הגש תביעה ואל תוותר מראש. ניתן לערער." },
      { title: "ציין את הנסיבות במדויק", desc: "חשוב לציין שהפגיעה אירעה במהלך ריצה למרחב מוגן בעקבות אזעקה מאושרת." },
      { title: "בקש עדים", desc: "אם היו עדים לאירוע, שמור את פרטיהם - זה יחזק את התביעה שלך." }
    ],
    contacts: [
      { name: "ביטוח לאומי", phone: "*6050" },
      { name: "סיוע משפטי", phone: "*8916" }
    ]
  },
  result_injury_blast: {
    icon: "💨",
    title: "פגיעה מגל הדף",
    subtitle: "זכאי לטיפול ותביעה כנפגע פעולת איבה",
    urgency: "warning",
    steps: [
      { title: "פנה לרופא מיד", desc: "גל הדף יכול לגרום לנזקי שמיעה, ריאות ומוח שאינם נראים לעין. חשוב לבדוק." },
      { title: "תעד את המיקום בזמן האירוע", desc: "רשום את הכתובת המדויקת, שעה ותאריך. ייתכן שיהיה צורך בחוות דעת טכנית." },
      { title: "הגש תביעה לביטוח לאומי", desc: "פגיעות גל הדף מוכרות כפגיעת פעולת איבה כשמוכח קשר ישיר." },
      { title: "בדיקת שמיעה ונוירולוגית", desc: "בקש בדיקות ספציפיות - נזק שמיעה ונזק נוירולוגי עשויים להתגלות רק לאחר מספר ימים." }
    ],
    contacts: [
      { name: "ביטוח לאומי", phone: "*6050" },
      { name: "מד\"א", phone: "101" }
    ]
  },
  result_mental_acute: {
    icon: "💙",
    title: "חרדה חריפה / פגיעה נפשית",
    subtitle: "פגיעות נפשיות מוכרות ויש לך זכויות מלאות",
    urgency: "info",
    steps: [
      { title: "פנה לקבלת עזרה מיידית", desc: "צור קשר עם נט\"ל (1-800-363-363) או סה\"ר (1201). פנייה ראשונה לא מחייבת אותך לכלום." },
      { title: "בקש אשפוז / טיפול ברפואה ציבורית", desc: "ביטוח הבריאות מכסה טיפול פסיכיאטרי ופסיכולוגי. בקש הפניה מרופא המשפחה." },
      { title: "תעד פניות ואבחונים", desc: "שמור תיעוד של כל פנייה לטיפול - יהיה נחוץ לתביעה." },
      { title: "שקול תביעה לביטוח לאומי", desc: "נכות נפשית הנגרמת מפעולת מלחמה מוכרת - ייעץ עם עו\"ד." }
    ],
    contacts: [
      { name: "נט\"ל", phone: "1-800-363-363" },
      { name: "סה\"ר", phone: "1201" }
    ]
  },
  result_property_direct: {
    icon: "🏚️",
    title: "פגיעה ישירה בנכס",
    subtitle: "פנה מיד לקרן פיצויים מס רכוש",
    urgency: "danger",
    steps: [
      { title: "אל תיכנס לנכס לפני קבלת אישור", desc: "יש לבקש בדיקת בטיחות מהרשות המקומית לפני כניסה לנכס שנפגע." },
      { title: "צלם את הנזק לפני כל תיקון", desc: "תיעוד חזותי מפורט הוא הבסיס לתביעה. צלם מכל זווית, כולל הנזק הפנימי." },
      { title: "הגש תביעה לקרן פיצויים מס רכוש", desc: "מגישים דרך רשות המסים. יש לעשות זאת תוך 3 חודשים מיום הנזק. הטפסים באתר gov.il." },
      { title: "הזמן שמאי מוסמך", desc: "ממליצים לשכור שמאי רכוש פרטי בנוסף לשמאי של הרשות - לבקרה על שווי הנזק." },
      { title: "שמור כל קבלה", desc: "הוצאות פינוי, אחסון, מגורים זמניים - כל אלו עשויים להיות ניתנים לפיצוי." }
    ],
    contacts: [
      { name: "קרן פיצויים מס רכוש", phone: "1222" },
      { name: "רשות המסים", phone: "*4954" }
    ]
  },
  result_property_blast: {
    icon: "🪟",
    title: "נזק מגל הדף",
    subtitle: "שמשות שבורות, קירות סדוקים, דלתות - הכל ניתן לתביעה",
    urgency: "warning",
    steps: [
      { title: "תעד לפני תיקון", desc: "צלם כל נזק לפני שמזמינים תיקון. שמור ווטסאפ, מסרונים, תמונות עם חותמת תאריך." },
      { title: "פנה לחברת הביטוח שלך", desc: "ראשית פנה לביטוח הדירה. בדוק אם יש כיסוי למלחמה בפוליסה." },
      { title: "הגש תביעה לקרן פיצויים", desc: "גם אם יש ביטוח, ניתן להגיש לקרן פיצויים. ייתכן כיסוי על הפרשים." },
      { title: "הגש תוך 3 חודשים", desc: "המועד האחרון לתביעה הוא 3 חודשים מיום הנזק. אל תחכה." }
    ],
    contacts: [
      { name: "קרן פיצויים מס רכוש", phone: "1222" }
    ]
  },
  result_property_rented: {
    icon: "🏢",
    title: "דירה שכורה שניזוקה",
    subtitle: "הבעלים מגיש על המבנה - אתה על התכולה",
    urgency: "info",
    steps: [
      { title: "הודע לבעל הדירה מיד", desc: "שלח הודעה בכתב (ווטסאפ מספיק) עם תמונות. תעד את התקשורת." },
      { title: "תבע על רכושך האישי", desc: "אתה רשאי לתבוע פיצויים על רכוש אישי שניזוק. הגש לקרן פיצויים בנפרד מהבעלים." },
      { title: "בדוק ביטוח תכולה", desc: "אם יש לך ביטוח תכולה - פנה אליו ראשית. אם לא - שקול לקנות בעתיד." },
      { title: "בקש הפחתה בשכירות", desc: "אם הדירה לא ראויה למגורים בתקופת התיקון, בקש הפחתה בשכר הדירה בכתב." }
    ],
    contacts: [
      { name: "קרן פיצויים מס רכוש", phone: "1222" },
      { name: "סיוע משפטי", phone: "*8916" }
    ]
  },
  result_property_contents: {
    icon: "📦",
    title: "נזק לרכוש אישי בדירה",
    subtitle: "ניתן לתבוע על ציוד אישי שניזוק",
    urgency: "info",
    steps: [
      { title: "ערוך רשימת נזקים", desc: "פרט כל פריט שניזוק - עם שווי משוער. חפש מחירים מקוונים לתיעוד." },
      { title: "צלם את הפריטים שניזוקו", desc: "לפני השלכה - צלם. אחרי - שמור פריטים ניזוקים כל עוד אפשר לצורך שמאות." },
      { title: "הגש לחברת הביטוח", desc: "ביטוח תכולה מכסה רכוש אישי. בדוק אם הפוליסה שלך כוללת כיסוי מלחמה." },
      { title: "הגש לקרן פיצויים", desc: "במקרים בהם הביטוח לא מכסה, ניתן לפנות לקרן פיצויים מס רכוש." }
    ],
    contacts: [
      { name: "קרן פיצויים מס רכוש", phone: "1222" }
    ]
  },
  result_vehicle_damaged: {
    icon: "🚗",
    title: "רכב ניזוק / נשרף",
    subtitle: "כיסוי ביטוחי + פיצוי ממשלתי",
    urgency: "warning",
    steps: [
      { title: "הגש תביעה לחברת הביטוח", desc: "פנה לביטוח הרכב. ודא שיש כיסוי מיוחד למקרי מלחמה - לא כולם כוללים." },
      { title: "הגש גם לקרן פיצויים", desc: "ניתן להגיש לרשות המסים גם אם יש ביטוח - לכיסוי ההפרשים." },
      { title: "תעד לפני גרירה", desc: "צלם לפני שהרכב נגרר. שמור הודעת האירוע מהמשטרה." },
      { title: "בקש ממוסך שומת נזק בכתב", desc: "שמאי מטעמך לצד שמאי הביטוח נותן ביטחון שהפיצוי יהיה מלא." }
    ],
    contacts: [
      { name: "קרן פיצויים מס רכוש", phone: "1222" },
      { name: "רשות המסים", phone: "*4954" }
    ]
  },
  result_vehicle_accident: {
    icon: "💥",
    title: "תאונת דרכים בגלל אזעקה",
    subtitle: "זכאי לפיצוי מקרן נפגעי תאונות וביטוח",
    urgency: "warning",
    steps: [
      { title: "הגש דו\"ח תאונה במשטרה", desc: "חשוב לציין במפורש שהאזעקה גרמה לתאונה. זה ישפיע על כיסוי הביטוח." },
      { title: "פנה לחברת הביטוח", desc: "תאונות הנגרמות מריצה לממ\"ד עשויות להיות מוכרות בתנאים מסוימים." },
      { title: "שמור תיעוד רפואי", desc: "אם נפצעת - תעד את הפציעות ופנה לביטוח לאומי כנפגע תאונת דרכים." }
    ],
    contacts: [
      { name: "משטרה", phone: "100" },
      { name: "ביטוח לאומי", phone: "*6050" }
    ]
  },
  result_work_absence: {
    icon: "🏢",
    title: "לא יכול להגיע לעבודה",
    subtitle: "יש הגנות חוקיות בזמן מלחמה",
    urgency: "info",
    steps: [
      { title: "עדכן את המעסיק בכתב", desc: "שלח הודעה בכתב על הסיבה להיעדרות. שמור עותק לעצמך." },
      { title: "בדוק זכאות לדמי אבטלה", desc: "אם אזור מגוריך מוכרז כמוגבל, ייתכן זכאות לדמי אבטלה מביטוח לאומי." },
      { title: "קרא תקנות שעת חירום", desc: "בזמן מלחמה יש תקנות מיוחדות המגנות על עובדים שלא יכולים להגיע לעבודה." },
      { title: "פנה לסיוע משפטי בסכסוך", desc: "אם המעסיק מאיים בפיטורים - פנה מיד לסיוע משפטי או ייעוץ בהסתדרות." }
    ],
    contacts: [
      { name: "משרד העבודה", phone: "*3456" },
      { name: "ביטוח לאומי", phone: "*6050" }
    ]
  },
  result_work_fired: {
    icon: "📋",
    title: "פוטרת / חל\"ת בגלל המלחמה",
    subtitle: "יש לך זכויות - בדוק לפני שמוותר",
    urgency: "warning",
    steps: [
      { title: "בדוק אם קיבלת פיטורים כחוק", desc: "פיטורים בזמן מלחמה דורשים הליך חוקי. בקש הודעה בכתב." },
      { title: "הגש לדמי אבטלה מיד", desc: "הגש תביעה לביטוח לאומי ב-30 הימים הראשונים. כל יום שעובר מקטין את הכיסוי." },
      { title: "בדוק זכויות פיצויים", desc: "בפיטורים שלא כדין - זכאי לפיצויים. בחל\"ת - בדוק אם מרצון או כפוי." },
      { title: "פנה לסיוע משפטי", desc: "פיטורים בגלל מלחמה דורשים בחינה - לא כל מקרה חוקי." }
    ],
    contacts: [
      { name: "ביטוח לאומי", phone: "*6050" },
      { name: "משרד העבודה", phone: "*3456" },
      { name: "סיוע משפטי", phone: "*8916" }
    ]
  },
  result_work_unpaid: {
    icon: "💰",
    title: "מעסיק לא משלם שכר",
    subtitle: "הפרת חוק עבודה - יש מה לעשות",
    urgency: "danger",
    steps: [
      { title: "שלח מכתב דרישה בכתב", desc: "דרוש שכרך בכתב עם תאריך. זה יוצר עילה חוקית לתביעה." },
      { title: "הגש תלונה למשרד העבודה", desc: "ניתן להגיש תלונה על מעסיק שלא משלם - יש לו יכולות אכיפה." },
      { title: "פנה לסיוע משפטי", desc: "תביעה בבית דין לעבודה היא מהירה יחסית ולא דורשת עו\"ד בהכרח." }
    ],
    contacts: [
      { name: "משרד העבודה", phone: "*3456" },
      { name: "סיוע משפטי", phone: "*8916" }
    ]
  },
  business: {
    icon: "🏪",
    title: "עסק שנפגע",
    subtitle: "פיצויים לבעלי עסקים דרך רשות המסים",
    urgency: "warning",
    steps: [
      { title: "תעד הפסדי הכנסה", desc: "שמור מסמכים חשבונאיים - השוואת מחזורים, הוצאות מיוחדות, נזקים לציוד." },
      { title: "פנה לרשות המסים", desc: "יש תכנית פיצויים לעסקים שנפגעו - דרך רשות המסים ורשות לפיתוח כלכלי." },
      { title: "בקש הלוואות מסובסדות", desc: "בנק ישראל ומשרד האוצר מפעילים תכניות הלוואות לעסקים בזמן חירום." },
      { title: "שכור רו\"ח לתביעה", desc: "בתביעות עסקיות מורכבות - רואה חשבון שמכיר פיצויי מלחמה יגדיל את הפיצוי שתקבל." }
    ],
    contacts: [
      { name: "רשות המסים", phone: "*4954" },
      { name: "סיוע משפטי", phone: "*8916" }
    ]
  },
  mental: {
    icon: "💙",
    title: "פגיעה נפשית / חרדה",
    subtitle: "אתה לא לבד - יש מקצוענים שמחכים לעזור",
    urgency: "info",
    steps: [
      { title: "צור קשר עם נט\"ל עכשיו", desc: "קו חירום לנפגעי טראומה - 1-800-363-363. חינמי, אנונימי, מקצועי." },
      { title: "פנה לרופא המשפחה", desc: "בקש הפניה לפסיכולוג / פסיכיאטר דרך קופת החולים. זה כלול בסל הבריאות." },
      { title: "שקול EMDR / CBT", desc: "טיפולים ממוקדי טראומה הוכחו כיעילים. שאל את המטפל על שיטות אלו." },
      { title: "בנה רשת תמיכה", desc: "שתף בני משפחה וחברים קרובים. בידוד מחמיר טראומה." }
    ],
    contacts: [
      { name: "נט\"ל", phone: "1-800-363-363" },
      { name: "סה\"ר", phone: "1201" }
    ]
  }
};

// ===== WIZARD STATE =====
let wizardState = { current: "start", history: [] };

function initWizard() {
  const el = document.getElementById("wizard-content");
  if (!el) return;
  renderWizardStep("start");
}

function renderWizardStep(stepKey) {
  const el = document.getElementById("wizard-content");
  const step = WIZARD_TREE[stepKey];
  if (!step) return;

  // Update progress
  const totalSteps = 3;
  const depth = wizardState.history.length;
  const progress = Math.min((depth / totalSteps) * 100, 90);
  const bar = document.getElementById("wizard-progress-bar");
  if (bar) bar.style.width = progress + "%";

  if (step.result) {
    renderWizardResult(step.result);
    return;
  }

  let html = `<div class="wizard-question">${step.question}</div><div class="wizard-options">`;
  step.options.forEach((opt, i) => {
    html += `<button class="wizard-option" onclick="wizardChoose('${opt.next}')">
      <span class="wizard-option-icon">${opt.icon}</span>
      <span>${opt.text}</span>
    </button>`;
  });
  html += `</div>`;

  if (wizardState.history.length > 0) {
    html += `<button class="wizard-back" onclick="wizardBack()">← חזור לשאלה הקודמת</button>`;
  }

  el.innerHTML = html;
}

function renderWizardResult(resultKey) {
  const el = document.getElementById("wizard-content");
  const bar = document.getElementById("wizard-progress-bar");
  if (bar) bar.style.width = "100%";

  const result = WIZARD_RESULTS[resultKey];
  if (!result) return;

  let stepsHtml = result.steps.map((s, i) => `
    <div class="step-item">
      <div class="step-num">${i + 1}</div>
      <div class="step-text">
        <strong>${s.title}</strong>
        <span>${s.desc}</span>
      </div>
    </div>
  `).join("");

  let contactsHtml = result.contacts.map(c => `
    <a href="tel:${c.phone}" class="contact-chip">
      📞 ${c.name} <span class="chip-phone">${c.phone}</span>
    </a>
  `).join("");

  el.innerHTML = `
    <div class="wizard-result">
      <div class="result-header">
        <div class="result-icon">${result.icon}</div>
        <div>
          <div class="result-title">${result.title}</div>
          <div class="result-subtitle">${result.subtitle}</div>
        </div>
      </div>
      <div class="step-list">${stepsHtml}</div>
      <div class="result-contacts">${contactsHtml}</div>
      <button class="wizard-back" onclick="wizardReset()" style="margin-top:16px">↺ התחל מחדש</button>
    </div>
  `;
}

function wizardChoose(next) {
  wizardState.history.push(wizardState.current);
  wizardState.current = next;
  const step = WIZARD_TREE[next];
  if (step && step.result) {
    renderWizardResult(step.result);
  } else {
    renderWizardStep(next);
  }
}

function wizardBack() {
  if (wizardState.history.length === 0) return;
  const prev = wizardState.history.pop();
  wizardState.current = prev;
  renderWizardStep(prev);
}

function wizardReset() {
  wizardState = { current: "start", history: [] };
  const bar = document.getElementById("wizard-progress-bar");
  if (bar) bar.style.width = "5%";
  renderWizardStep("start");
}

// ===== CONTACTS =====
async function loadContacts() {
  const grid = document.getElementById("contacts-grid");
  if (!grid) return;

  try {
    const base = getBase();
    const res = await fetch(base + "data/resources.json");
    const data = await res.json();
    renderContacts(data.contacts, "כל");
    setupContactFilter(data.contacts);
  } catch (e) {
    console.warn("Could not load contacts JSON", e);
  }
}

function renderContacts(contacts, filter) {
  const grid = document.getElementById("contacts-grid");
  if (!grid) return;
  const filtered = filter === "כל" ? contacts : contacts.filter(c => c.category === filter);
  grid.innerHTML = filtered.map(c => `
    <div class="contact-card">
      <div class="contact-card-header">
        <div class="contact-card-icon">${c.icon}</div>
        <div>
          <div class="contact-card-name">${c.name}</div>
          <span class="contact-category-badge cat-${c.category}">${c.category}</span>
        </div>
      </div>
      <div class="contact-card-desc">${c.description}</div>
      <div class="contact-card-actions">
        <a href="tel:${c.phone}" class="contact-btn contact-btn-call">📞 ${c.phone}</a>
        ${c.website ? `<a href="${c.website}" target="_blank" class="contact-btn contact-btn-web">🌐 אתר</a>` : ""}
      </div>
    </div>
  `).join("");
}

function setupContactFilter(contacts) {
  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderContacts(contacts, tab.dataset.filter);
    });
  });
}

// ===== FAQ =====
function initFAQ() {
  const items = document.querySelectorAll(".faq-item");
  items.forEach(item => {
    const q = item.querySelector(".faq-question");
    if (q) {
      q.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        items.forEach(i => i.classList.remove("open"));
        if (!isOpen) item.classList.add("open");
      });
    }
  });
}

// ===== CHECKLIST =====
function initChecklists() {
  const items = document.querySelectorAll(".checklist-item");
  items.forEach(item => {
    const key = "check_" + item.dataset.key;
    if (localStorage.getItem(key) === "1") {
      item.classList.add("done");
      const box = item.querySelector(".checklist-box");
      if (box) box.textContent = "✓";
    }
    item.addEventListener("click", () => {
      const isDone = item.classList.toggle("done");
      const box = item.querySelector(".checklist-box");
      if (box) box.textContent = isDone ? "✓" : "";
      localStorage.setItem(key, isDone ? "1" : "0");
    });
  });
}

// ===== SEARCH =====
function initSearch() {
  const input = document.getElementById("search-input");
  if (!input) return;
  input.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    const cards = document.querySelectorAll("[data-searchable]");
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = (!q || text.includes(q)) ? "" : "none";
    });
  });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
  const toggle = document.querySelector(".nav-mobile-toggle");
  const menu = document.getElementById("mobile-nav");
  const close = document.querySelector(".mobile-nav-close");
  if (toggle && menu) {
    toggle.addEventListener("click", () => menu.classList.add("open"));
  }
  if (close && menu) {
    close.addEventListener("click", () => menu.classList.remove("open"));
  }
}

// ===== HEADER SCROLL =====
function initHeaderScroll() {
  const header = document.querySelector(".header");
  if (!header) return;
  window.addEventListener("scroll", () => {
    header.style.borderBottomColor = window.scrollY > 10
      ? "rgba(255,255,255,0.1)"
      : "rgba(255,255,255,0.07)";
  });
}

// ===== ACTIVE NAV =====
function setActiveNav() {
  const path = window.location.pathname;
  const links = document.querySelectorAll(".nav a, .mobile-nav a");
  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href && path.endsWith(href)) link.classList.add("active");
  });
}

// ===== UTILS =====
function getBase() {
  const scripts = document.querySelectorAll("script[src]");
  for (const s of scripts) {
    if (s.src.includes("/js/")) {
      return s.src.split("/js/")[0] + "/";
    }
  }
  return "./";
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  initWizard();
  loadContacts();
  initFAQ();
  initChecklists();
  initSearch();
  initMobileMenu();
  initHeaderScroll();
  setActiveNav();
});
