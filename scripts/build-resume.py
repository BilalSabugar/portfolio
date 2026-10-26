"""Generate the intentionally public, one-page resume from verified portfolio facts."""
from pathlib import Path
import shutil
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output/pdf/bilal-sabugar-resume.pdf"
OUT.parent.mkdir(parents=True, exist_ok=True)
pdfmetrics.registerFont(TTFont("Resume", "C:/Windows/Fonts/arial.ttf"))
pdfmetrics.registerFont(TTFont("ResumeBold", "C:/Windows/Fonts/arialbd.ttf"))
pdfmetrics.registerFontFamily("Resume", normal="Resume", bold="ResumeBold", italic="Resume", boldItalic="ResumeBold")
ink = colors.HexColor("#16211c")
muted = colors.HexColor("#48564f")
styles = {
    "name": ParagraphStyle("name", fontName="ResumeBold", fontSize=27, leading=31, textColor=ink, spaceAfter=5),
    "tag": ParagraphStyle("tag", fontName="Resume", fontSize=11, leading=15, textColor=muted, spaceAfter=8),
    "contact": ParagraphStyle("contact", fontName="Resume", fontSize=9, leading=14, textColor=muted, spaceAfter=3),
    "section": ParagraphStyle("section", fontName="ResumeBold", fontSize=10, leading=14, textColor=ink, spaceBefore=14, spaceAfter=6),
    "role": ParagraphStyle("role", fontName="ResumeBold", fontSize=10.5, leading=14, textColor=ink, spaceAfter=3),
    "body": ParagraphStyle("body", fontName="Resume", fontSize=10, leading=14.2, textColor=ink, spaceAfter=5, alignment=TA_LEFT),
}
story = []
def p(text, style="body"):
    return Paragraph(text, styles[style])
def section(title):
    story.append(p(title.upper(), "section"))
def role(title, text):
    story.append(KeepTogether([p(title, "role"), p(text)]))
def link(label, url):
    return f'<a href="{url}" color="#204d3a">{label}</a>'

story.extend([
    p("Bilal Sabugar", "name"),
    p("Robotics | Mechatronics | Control &amp; Software", "tag"),
    p(link("bilal.07.04.07@gmail.com", "mailto:bilal.07.04.07@gmail.com") + "  |  " + link("Portfolio", "https://bilalsabugar.github.io/portfolio/") + "  |  " + link("GitHub", "https://github.com/BilalSabugar") + "  |  " + link("LinkedIn", "https://www.linkedin.com/in/bilal-sabugar/"), "contact"),
    Spacer(1, 7),
    p("B.Tech student working across mechanical design, robotics platforms and engineering software. Co-founder and CTO of Aetheron Labs, with research internship experience at the IITGN Robotics Lab."),
])
section("Experience")
role("Research internship | IITGN Robotics Lab, IIT Gandhinagar", "Worked with Aditya Jadav and Archie Veera on a tactile-based ball-balancing system using a half-humanoid platform. Related OSRS responsibilities include platform engineering, online system identification and full-stack robotics.")
role("Co-founder &amp; CTO | Aetheron Labs", "Mechanical design, structural fabrication and mechatronic integration within the founding team. Work connects the physical structure, actuators and electronics across company robotics programs.")
section("Selected engineering work")
role("Novexa | 18-joint hexapod", "Contributed to mechanical design, fabrication and integration within a four-person team. Evidence includes original Fusion 360 CAD, printable parts, a physical prototype and a co-authored journal paper. " + link("Case study", "https://bilalsabugar.github.io/portfolio/work/novexa/"))
role("OSRS | Robotics research platform", "Credited for platform engineering, RLS identification and full-stack robotics. The shared platform connects robot hardware, perception, MuJoCo simulation and telemetry. " + link("Source and contribution", "https://github.com/TeamOSRS/OSRS/blob/main/AUTHORS.md"))
role("RoboScout | Engineering research software", "Directed the product and engineering workflow for source-linked component research and deterministic sizing calculations. Implementation uses AI coding agents under human architectural direction. " + link("Architecture", "https://github.com/BilalSabugar/RoboScout"))
story.append(p("Additional software: WIRK (task and focus workspace), RecoverOS (test-mode payment recovery), Calm Pulse (team wellness prototype; back-end development)."))
section("Education")
role("ATLAS SkillTech University | B.Tech, 2025-2029 (expected)", "Computer Science, Artificial Intelligence and Robotics.")
section("Technical toolkit")
story.append(p("Mechanical: Fusion 360, 3D printing, actuation and integration.<br/>Robotics: Python, OpenCV, MuJoCo, control interfaces and system identification.<br/>Software: TypeScript, React, Next.js, FastAPI, React Native and Git."))
section("Publication")
story.append(p("<b>Fabrication of a 3D Printed Hexapod for All Terrain Adaptive Locomotion.</b> Co-authored with Aditya Jadav, Archie Veera and Rabinder Henry. IJIRT, Vol. 12, Issue 11, pp. 12393-12396, April 2026. " + link("Paper", "https://ijirt.org/publishedpaper/IJIRT199344_PAPER.pdf")))

doc = SimpleDocTemplate(str(OUT), pagesize=A4, rightMargin=43, leftMargin=43, topMargin=35, bottomMargin=32, title="Bilal Sabugar - Robotics and Software Resume", author="Bilal Sabugar")
doc.build(story)
public = ROOT / "public/bilal-sabugar-resume.pdf"
shutil.copyfile(OUT, public)
print(f"Created {OUT}")
