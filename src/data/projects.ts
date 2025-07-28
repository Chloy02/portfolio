// src/data/projects.ts

export const projectsData = [
  {
    slug: "photometric-redshift-estimation",
    title: "Photometric Redshift Estimation",
    description: "Architected a hybrid pipeline combining clustering with a stacked ensemble of boosting models to estimate galactic redshifts.",
    tags: ["Python", "XGBoost", "Scikit-learn", "K-Means", "Astropy"],
    link: "https://github.com/Chloy02/Photometric_Redshift_Estimation.git",
    image: "/project-redshift.webp", // Add your image path here
    details: `
      <p>This self-directed research project aimed to accurately estimate galactic redshifts, a crucial metric in astrophysics, using photometric data from the Sloan Digital Sky Survey (SDSS).</p>
      <h3 class="text-xl font-bold mt-6 mb-2">The Challenge</h3>
      <p>Photometric redshift estimation is a classic problem in astrophysics, often hampered by noisy data and the need for robust models. The goal was to build a pipeline that could outperform traditional methods by leveraging a hybrid machine learning approach.</p>
      <h3 class="text-xl font-bold mt-6 mb-2">My Solution</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Architected a hybrid pipeline combining clustering (K-Means, GMM) with a stacked ensemble of boosting models (XGBoost, NGBoost).</li>
        <li>Implemented a multi-method outlier detection strategy using Isolation Forest, LOF, and Z-score to clean the SDSS data.</li>
        <li>Engineered several astronomical features, which proved crucial for model performance.</li>
        <li>Achieved a high predictive accuracy with an R² score of 0.84 and an RMSE of 0.21, demonstrating the model's robustness.</li>
      </ul>
    `
  },
  {
    slug: "student-attendance-system",
    title: "Student Attendance & Emotion System",
    description: "Engineered a real-time system using a custom-trained YOLOv8 model and DeepFace to automatically detect, recognize, and track student emotions.",
    tags: ["Python", "OpenCV", "YOLOv8", "TensorFlow", "MySQL"],
    link: "https://github.com/Chloy02/Attendance-management-system-using-facial-recognition",
    image: "/project-attendance.webp", // Add your image path here
    details: `
      <p>This project is a real-time attendance and engagement monitoring system designed for classroom environments. It uses computer vision to automatically detect students, recognize their faces, and analyze their emotional state.</p>
      <h3 class="text-xl font-bold mt-6 mb-2">Key Features</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Custom-trained a YOLOv8 model on a local dataset of 20 students to ensure high detection accuracy.</li>
        <li>Leveraged transfer learning with a pre-trained ResNet model in TensorFlow for the facial recognition component.</li>
        <li>Integrated the DeepFace library for real-time emotion analysis (e.g., happy, neutral, sad).</li>
        <li>Logged all attendance and engagement data to a MySQL database using SQLAlchemy for persistence and analysis.</li>
      </ul>
    `
  },
  {
    slug: "airsign-asl-recognition",
    title: "AirSign: Real-Time ASL Recognition",
    description: "Trained and fine-tuned a custom YOLOv8 model on the WLASL dataset to recognize nuanced American Sign Language gestures in a live environment.",
    tags: ["Python", "PyTorch", "YOLOv8", "OpenCV", "MediaPipe"],
    link: "https://github.com/Chloy02/AirSign.git",
    image: "/project-airsign.webp", // Add your image path here
    details: `
      <p>AirSign is a real-time American Sign Language (ASL) recognition system that translates hand gestures into text. The project demonstrates a complete end-to-end machine learning workflow, from data preprocessing to real-time inference.</p>
      <h3 class="text-xl font-bold mt-6 mb-2">The Process</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Engineered a robust data pipeline to process the WLASL video dataset, using MediaPipe for intelligent frame extraction to create a high-quality, annotated image set for training.</li>
        <li>Trained and fine-tuned a custom YOLOv8 object detection model on this dataset.</li>
        <li>Achieved a high mean Average Precision (mAP50-95 of 0.79) on the challenging task of recognizing nuanced hand gestures.</li>
        <li>Built a real-time inference pipeline using OpenCV to capture webcam footage and display the translated sign language.</li>
      </ul>
    `
  },
  {
    slug: "ml-exoplanet-review",
    title: "ML for Exoplanet Detection Review",
    description: "Authored an in-depth review paper on ML/DL models for analyzing light curve data from the TESS and Kepler missions.",
    tags: ["Literature Review", "Machine Learning", "Astrophysics"],
    link: "https://github.com/Chloy02",
    image: "/project-exoplanet.webp", // Add your image path here
    details: `
      <p>This project involved a comprehensive literature review of the application of machine learning and deep learning models for analyzing light curve data from NASA's TESS and Kepler missions to detect exoplanets.</p>
      <h3 class="text-xl font-bold mt-6 mb-2">Key Areas of Research</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Analyzed state-of-the-art techniques, including LSTMs and WaveCeptionNet, for their effectiveness in signal detection.</li>
        <li>Investigated methods for addressing common challenges such as stellar variability, instrumental noise, and the scalability of data processing.</li>
        <li>The resulting paper provides a detailed overview of the field, highlighting successful models and outlining future research directions.</li>
      </ul>
    `
  }
];