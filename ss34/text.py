import pyautogui
import pyperclip
import time
from pynput import keyboard
stop_script = False 
def on_press(key):
    global stop_script
    if key == keyboard.Key.esc:
        stop_script = True
        print("\n[Dừng] Đã nhận lệnh thoát chương trình!")

listener = keyboard.Listener(on_press=on_press)
listener.start()
message = input("Nhập tin nhắn muốn gửi: ")
try:
    repeat = int(input("Nhập số lần gửi tin nhắn: "))
    if repeat <= 0:
        raise ValueError("Số lần gửi phải lớn hơn 0")
except ValueError:
    print("❌ Vui lòng nhập một số nguyên dương!")
    exit()
print("\n[⏳] Bạn có 5 giây để chuyển sang cửa sổ chat...")
time.sleep(5)
print("[⚠] Hãy đảm bảo ô nhập tin nhắn đã được chọn!")
for i in range(repeat):
    if stop_script:
        break
    pyperclip.copy(message)  
    pyautogui.hotkey("ctrl", "v")  
    pyautogui.press("enter")  
    print(f"[📩] Đã gửi tin nhắn {i+1}/{repeat}")
    time.sleep(1)
print("\n✅ Kết thúc chương trình!")
listener.stop()
