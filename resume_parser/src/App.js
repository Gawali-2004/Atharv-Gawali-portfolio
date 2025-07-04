import React, { useState } from 'react';
import { FileUpload } from './components/FileUpload';
import { ResumeDisplay } from './components/ResumeDisplay';
import { ResumeParserService } from './services/resumeParser';
import { Brain, Zap, Shield, Target } from 'lucide-react';

function App() {
  const [uploadStatus, setUploadStatus] = useState({ status: 'idle', progress: 0, message: '' });
  const [parsedResume, setParsedResume] = useState(null);
  // Function to handle file upload and parsing
  // This simulates the upload process and calls the resume parser service                                      
  const handleFileUpload = async (file: File) => {
    setUploadStatus({ status: 'uploading', progress: 0 });
    
    try {
      // Simulate upload progress
      for (let i = 0; i <= 100; i += 20) {
        setUploadStatus({ status: 'uploading', progress: i });
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      setUploadStatus({ status: 'processing', message: 'Analyzing resume with AI...' });
      
      const result = await ResumeParserService.parseResume(file);
      setParsedResume(result);
      setUploadStatus({ status: 'success' });
      
    } catch (error) {
      setUploadStatus({ 
        status: 'error', 
        message: 'Failed to parse resume. Please try again.' 
      });
    }
  };

  const handleNewUpload = () => {
    setParsedResume(null);
    setUploadStatus({ status: 'idle' });
  };

  if (parsedResume) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <button
              onClick={handleNewUpload}
              className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              ← Upload New Resume
            </button>
          </div>
          <ResumeDisplay resume={parsedResume} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
      {/* Header */}
      <div className="text-center py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary-100 rounded-full">
              <Brain className="w-12 h-12 text-primary-600" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI-Powered Resume Parser
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Transform your resume into structured data with advanced AI analysis. 
            Get instant insights, ATS scoring, and optimization recommendations.
          </p>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="inline-flex p-3 bg-success-100 rounded-full mb-4">
                <Zap className="w-6 h-6 text-success-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Parse resumes in seconds with our advanced AI engine</p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex p-3 bg-warning-100 rounded-full mb-4">
                <Target className="w-6 h-6 text-warning-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ATS Optimization</h3>
              <p className="text-gray-600">Get scored and recommendations for ATS compatibility</p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex p-3 bg-primary-100 rounded-full mb-4">
                <Shield className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Private</h3>
              <p className="text-gray-600">Your data is processed securely and never stored</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <div className="px-4 pb-16">
        <FileUpload onFileUpload={handleFileUpload} uploadStatus={uploadStatus} />
      </div>

      {/* Footer */}
      <footer className="text-center py-8 px-4 border-t border-gray-200 bg-white">
        <p className="text-gray-600">
          Built with React, TypeScript, and AI • Demo Application
        </p>
      </footer>
    </div>
  );
}

export default App;