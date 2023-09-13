package com.newsdekho;

import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ToastModule extends ReactContextBaseJavaModule {

    ToastModule(ReactApplicationContext context){
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "ToastModule";
    }


    @ReactMethod
    public void showToast(String text){
        Toast.makeText(
                getCurrentActivity(),
                text,
                Toast.LENGTH_LONG
        ).show();
    }
}
