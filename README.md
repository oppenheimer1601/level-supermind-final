# LunaVista.

## Project Overview
The AI-Powered Spiritual Guide is an innovative platform designed to provide personalized spiritual guidance using astrology and numerology. The system generates horoscopes, offers spiritual advice, and provides recommendations based on users' birth details. This project combines advanced AI techniques with ancient wisdom to deliver accurate and meaningful insights.

---

## Features

### 1. **Kundali & Horoscope Generation**
- Generates a detailed birth chart (Kundali) covering 12 houses.
- Provides insights into:
  - Career
  - Relationships
  - Personal Growth
  - Family
  - Social Connections
- Daily and monthly horoscope predictions.
- The data for the Kundali is fetched from the **VedicAstroAPI**.
- Includes SVG representations of the Kundali chart and detailed house information.

### 2. **AI Recommendations**
- **Personalized Gemstone Suggestions**:
  - Recommends gemstones and substitutes based on planetary alignments and zodiac signs.
  - Details the purpose, benefits, and how to wear gemstones.
- **Pooja (Ritual) Recommendations**:
  - Suggests poojas aligned with the user’s zodiac sign.
  - Explains their importance and benefits.
- **Do’s and Don’ts**:
  - Offers actionable advice based on astrological insights.

### 3. **Spiritual Content Delivery**
- Meditation and workout suggestions tailored to horoscope insights.
- Personalized sleep content to enhance well-being.

### 4. **Interactive Chatbot**
- Natural language chatbot for:
  - Spiritual advice.
  - Explaining recommendations and predictions.
  - Answering user queries.

---

## Technical Details

### **Frontend**
- Built using **Next.js**.
- Hosted on **Vercel** for seamless deployment and scalability.

### **3D Animation**
- Implemented using **Splime** for interactive and visually engaging user experiences.

### **Backend and Database**
- The data is trained on **DataStax AstraDB**, ensuring high availability and performance.
- **LangFlow** is used for model training and workflow optimization.

### **Trained Datasets**
1. **Horoscope Prediction Dataset**:
   - Includes dates, zodiac signs, and corresponding daily horoscopes.
   - Designed for generating unique predictions for each day.
2. **Numerology Insights Dataset**:
   - Provides guidance based on Mulank (Life Path Number) and Bhagyank (Destiny Number).
   - Includes recommendations for career, relationships, personal growth, family, and social connections.
3. **Personalized Spiritual Guidance Dataset**:
   - Contains information on gemstone suggestions, pooja recommendations, and dos and don’ts for each zodiac sign.

---

## How It Works
1. **User Input**:
   - The user provides their name, date of birth, time, gender, state, and city.
2. **Data Processing**:
   - The input is analyzed using trained datasets and astrological principles.
3. **Output**:
   - The system generates personalized insights, horoscopes, and recommendations.
4. **Interactive Chat**:
   - The chatbot enhances the user experience by providing real-time explanations and advice.

---

## Deployment
The project is deployed on **Vercel**, ensuring high performance and minimal downtime. 

---

## Acknowledgments
- **VedicAstroAPI**: For accurate astrological data and insights.
- **DataStax AstraDB**: For a robust and scalable database solution.
- **LangFlow**: For efficient model training workflows.
- **Next.js**: For creating a fast and interactive user interface.
- **Splime**: For integrating stunning 3D animations.

---

## Contributing
We welcome contributions to improve this platform! Feel free to submit issues or pull requests on GitHub.

---
