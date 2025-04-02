#!/bin/bash

# Sostituisci tutti i Link con a in HomePage.tsx
sed -i 's/<Link href=/<a href=/g' client/src/pages/HomePage.tsx
sed -i 's/<\/Link>/<\/a>/g' client/src/pages/HomePage.tsx

# Sostituisci tutti i Link con a in MeditationPage.tsx
sed -i 's/<Link href=/<a href=/g' client/src/pages/MeditationPage.tsx 
sed -i 's/<\/Link>/<\/a>/g' client/src/pages/MeditationPage.tsx

# Sostituisci tutti i Link con a in MoodPage.tsx
sed -i 's/<Link href=/<a href=/g' client/src/pages/MoodPage.tsx
sed -i 's/<\/Link>/<\/a>/g' client/src/pages/MoodPage.tsx

# Sostituisci tutti i Link con a in SubscriptionPage.tsx
sed -i 's/<Link href=/<a href=/g' client/src/pages/SubscriptionPage.tsx
sed -i 's/<\/Link>/<\/a>/g' client/src/pages/SubscriptionPage.tsx

# Sostituisci tutti i Link con a in AdminPage.tsx
sed -i 's/<Link href=/<a href=/g' client/src/pages/AdminPage.tsx
sed -i 's/<\/Link>/<\/a>/g' client/src/pages/AdminPage.tsx

# Sostituisci tutti i Link con a in ExercisesPage.tsx
sed -i 's/<Link href=/<a href=/g' client/src/pages/ExercisesPage.tsx
sed -i 's/<\/Link>/<\/a>/g' client/src/pages/ExercisesPage.tsx

# Sostituisci tutti i Link con a in ReflectionsPage.tsx
sed -i 's/<Link href=/<a href=/g' client/src/pages/ReflectionsPage.tsx
sed -i 's/<\/Link>/<\/a>/g' client/src/pages/ReflectionsPage.tsx

# Sostituisci tutti i Link con a in AIModulesPage.tsx
sed -i 's/<Link href=/<a href=/g' client/src/pages/AIModulesPage.tsx
sed -i 's/<\/Link>/<\/a>/g' client/src/pages/AIModulesPage.tsx

# Rendi lo script eseguibile
chmod +x replace_links.sh
